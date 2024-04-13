import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Phantom from "./components/Phantom";
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";

function FullHome() {
  return (
    <div>
      <Home />
      <About />
      <Roadmap />
    </div>
  );
}
export default function App() {
  return (
    <main className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<FullHome />} />
          <Route path="/phantom" element={<Phantom />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

/*

*/
