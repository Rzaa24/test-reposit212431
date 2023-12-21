// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* utama */
  apiKey: "AIzaSyC32OW0B1YFLgL3QgM0h0-RRAHu-aLDyNc",
  authDomain: "project-kelas-f8117.firebaseapp.com",
  projectId: "project-kelas-f8117",
  storageBucket: "project-kelas-f8117.appspot.com",
  messagingSenderId: "907388671143",
  appId: "1:907388671143:web:2c29066ba7f43696053782",
  measurementId: "G-3G9TQF1B8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();