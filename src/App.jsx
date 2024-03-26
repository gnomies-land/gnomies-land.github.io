import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

export default function App() {

  return (
    <main className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}
