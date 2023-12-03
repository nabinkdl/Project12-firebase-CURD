import React, { useEffect, useState } from 'react'
import {database} from './firebase-config'
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from '@firebase/firestore';

function App() {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  const [users,setUsers] = useState([])
  const userCollectionRef = collection(database, "user")


  const createUser = async () => {
                    await addDoc(userCollectionRef, {Name: newName, Age: Number(newAge)})
  }

  const updateUser = async (id, Age) => {
            const userDoc = doc(database, "user", id)
            const newFields = {Age: Age + 1}
            await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
          const userDoc = doc(database, "user", id)
          await deleteDoc(userDoc)
  }

  useEffect(() => {
        const getUsers = async () => {
        const data = await  getDocs(userCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))                
    }; 

  getUsers();
  },[userCollectionRef])

  return (
    <div>
        <div>
                      <input placeholder='Name..' 
                              onChange={(event) =>{
                              setNewName(event.target.value)
                              }}
                      />
                      <input type='number' placeholder='Age...'
                              onChange={(event) =>{
                              setNewAge(event.target.value)
                              }}
                      />
                      <button onClick={createUser}>Add User</button>
        </div>

        <div>
                {users.map((res) => {return(
                                              <div key={res.id}>
                                                    <h3>Branch Version</h3>
                                                    <h1>Name: {res.Name}, {newName}</h1>
                                                    <h1>Age: {res.Age}</h1>
                                                    <button onClick={()=>{updateUser(res.id, res.Age)}}>Increase Age</button> 
                                                    <button onClick={()=>{deleteUser(res.id)}}>Delete User</button>
                                              </div> );})}
        </div>





          




    </div>
  )
}

export default App
