import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

    
const firebaseConfig = {

  apiKey: "AIzaSyAz-3BuDI-7JX0M6eUZt1ylDaFLGcbi_QI",

  authDomain: "mvsforms-f6b64.firebaseapp.com",

  projectId: "mvsforms-f6b64",

  storageBucket: "mvsforms-f6b64.appspot.com",

  messagingSenderId: "794925523431",

  appId: "1:794925523431:web:d7477c469729cc0bdcdd42"

};

  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}