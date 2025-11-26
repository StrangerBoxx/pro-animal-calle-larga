// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvImYdASANJB9x8CyC8QYg7ChQerXILM",
  authDomain: "agrupacionproanimal-ad070.firebaseapp.com",
  projectId: "agrupacionproanimal-ad070",
  storageBucket: "agrupacionproanimal-ad070.firebasestorage.app",
  messagingSenderId: "726534477984",
  appId: "1:726534477984:web:414d61438aad0aebd911c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app);