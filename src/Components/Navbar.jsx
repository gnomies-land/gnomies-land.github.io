import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiGhostFill } from "react-icons/ri";


export default function Navbar() {
  return (
    <nav
      className={
        useResolvedPath(window.location.pathname).pathname === "/phantom"
          ? "app-nav phantom"
          : "app-nav"
      }
    >
      <Link to="/" className="site-title">
        <img src={logo} className="App-logo" alt="logo" />
        Gnomies Land
      </Link>
      <ul>
        <CustomA to="/#home" className="Nav-text">
          Home
        </CustomA>
        <CustomA to="/#about" className="Nav-text">
          About
        </CustomA>
        <CustomA to="/#roadmap" className="Nav-text">
          Roadmap
        </CustomA>
        <CustomLink to="/phantom">
          <RiGhostFill className="App-icon" />
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomA({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  let activeClass = "active";
  if (useResolvedPath(window.location.pathname).pathname === "/phantom"){
    activeClass = "active phantom";
  }

  return (
    <li className={isActive ? activeClass : ""}>
      <a href={to} {...props}>
        {children}
      </a>
    </li>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  let activeClass = "active";
  if (useResolvedPath(window.location.pathname).pathname === "/phantom"){
    activeClass = "active phantom";
  }

  return (
    <li className={isActive ? activeClass : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
