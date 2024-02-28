
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you neeimport { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCirojOT4I-b4qg6s-kfvcaTuS9i-ce6HQ",

  authDomain: "mvsstructural.firebaseapp.com",

  databaseURL: "https://mvsstructural-default-rtdb.firebaseio.com",

  projectId: "mvsstructural",

  storageBucket: "mvsstructural.appspot.com",

  messagingSenderId: "279811823841",

  appId: "1:279811823841:web:ff4ecc448af5668d813fa0",

  measurementId: "G-1JRPMXSK36"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;

 const db=getFirestore()

 export {db}