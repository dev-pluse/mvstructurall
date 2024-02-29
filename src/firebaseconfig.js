import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    


const firebaseConfig = {

    apiKey: "AIzaSyA2biRQ9P6MkoU4Q_36JqyOW7B9GhMv2tE",
  
    authDomain: "svrtest-8c899.firebaseapp.com",
  
    projectId: "svrtest-8c899",
  
    storageBucket: "svrtest-8c899.appspot.com",
  
    messagingSenderId: "680600583933",
  
    appId: "1:680600583933:web:b464160a2eab5410768894"
  
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}