import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    
const firebaseConfig = {

    apiKey: "AIzaSyBWrTrngpyvdvPdKHoaYfir7-b62oSrzeM",
  
    authDomain: "first-project-1d9ec.firebaseapp.com",
  
    projectId: "first-project-1d9ec",
  
    storageBucket: "first-project-1d9ec.appspot.com",
  
    messagingSenderId: "895318265674",
  
    appId: "1:895318265674:web:991ae4fcc8a1874123bbb3"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}