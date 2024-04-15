import NavLink from "./NavLink";
import NavA from "./NavA";
import {useResolvedPath } from "react-router-dom";
import phantomLogo from "../../assets/phantom-logo.png";
import logo from "../../assets/logo.png";;

export default function Navbar() {
  return (
    <nav
      className={
        useResolvedPath(window.location.pathname).pathname === "/phantom"
          ? "app-nav phantom"
          : "app-nav"
      }
    >
      <ul>
      <NavLink to="/" className="site-title">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="App-name-nav">Gnomies Land</span>
      </NavLink>
      </ul>
      <ul>
        <NavA to="/#home" className="Nav-text">
          Home
        </NavA>
        <NavA to="/#about" className="Nav-text">
          About
        </NavA>
        <NavA to="/#roadmap" className="Nav-text">
          Roadmap
        </NavA>
        <NavLink to="/phantom">
          <img src={phantomLogo} className="Phantom-icon" alt="phantom-logo"/>
        </NavLink>
      </ul>
    </nav>
  );
}
