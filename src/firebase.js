import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUV7kst8vXbzdv_DiZyf2kinfe4sioYGc",
  authDomain: "portfolio-vnew.firebaseapp.com",
  projectId: "portfolio-vnew",
  storageBucket: "portfolio-vnew.firebasestorage.app",
  messagingSenderId: "88257466615",
  appId: "1:88257466615:web:1aa37747e3173fb2f443f2",
  measurementId: "G-ESS90N8S84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };