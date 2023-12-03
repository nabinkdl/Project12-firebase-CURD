import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBoClKfZpZnVwzFV7f5wH6Y6jtbnUeeYQg",
  authDomain: "fir-curd-7c70c.firebaseapp.com",
  projectId: "fir-curd-7c70c",
  storageBucket: "fir-curd-7c70c.appspot.com",
  messagingSenderId: "360136297932",
  appId: "1:360136297932:web:76ce9fc3756fc308322169",
  measurementId: "G-XL2B5VKRYD"
};


const app = initializeApp(firebaseConfig); 
export const database = getFirestore(app);
