import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUV7kst8vXbzdv_DiZyf2kinfe4sioYGc",
    authDomain: "portfolio-vnew.firebaseapp.com",
    projectId: "portfolio-vnew",
    storageBucket: "portfolio-vnew.firebasestorage.app",
    messagingSenderId: "88257466615",
    appId: "1:88257466615:web:1aa37747e3173fb2f443f2",
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };