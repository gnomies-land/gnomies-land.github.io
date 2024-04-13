// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByYnm-cRVxfxauipmSmGKq0H8tATWOeOg",
  authDomain: "gnomies-land.firebaseapp.com",
  projectId: "gnomies-land",
  storageBucket: "gnomies-land.appspot.com",
  messagingSenderId: "1061204333977",
  appId: "1:1061204333977:web:6c9db3f94dfd401e4f6f08",
  measurementId: "G-ZH7H7S2XJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Obtiene la instancia de Firestore para la base de datos
const db = getFirestore(app);

// Obtiene la instancia de Auth para la autenticación
const auth = getAuth(app);

export { app, analytics, db, auth };