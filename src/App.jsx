import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Phantom from "./components/Phantom";
// eslint-disable-next-line no-unused-vars
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState('#9ce2f9');  // Color por defecto

  useEffect(() => {
    // Cambiar el color de fondo basado en la ruta
    switch(location.pathname) {
      case '/phantom':
        setBackgroundColor('#a087e9');
        break;
      default:
        setBackgroundColor('#9ce2f9');
    }
  }, [location]);

  return (
    <main className="App" style={{ transition: 'background-color 2.5s ease', backgroundColor: backgroundColor }}>
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
