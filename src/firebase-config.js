// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAm0d9-MVzqhgB5wtEeUnzbKm6O-75hZjw",
    authDomain: "admin-panel-factory.firebaseapp.com",
    databaseURL: "https://admin-panel-factory-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "admin-panel-factory",
    storageBucket: "admin-panel-factory.appspot.com",
    messagingSenderId: "735086676621",
    appId: "1:735086676621:web:6720a0c9d76a05abdbf0c4"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);