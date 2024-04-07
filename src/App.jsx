import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
// eslint-disable-next-line no-unused-vars
//import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytsics = getAnalytics(app);

export default function App() {
  return (
    <main className="App">
      <Navbar />
      <div className="container">
        <Home />
        <About />
      </div>
      <Footer />
    </main>
  );
}

/*
<Routes>
          <Route path="#home" element={<Home />} />
          <Route path="#about" element={<About />} />
</Routes>
*/
