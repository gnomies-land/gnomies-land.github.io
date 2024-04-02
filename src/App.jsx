import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

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
