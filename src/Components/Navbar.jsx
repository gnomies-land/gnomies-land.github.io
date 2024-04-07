import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="app-nav">
      <a href="/#home" className="site-title">
      
      <img src={logo} className="App-logo" alt="logo" />
        Gnomies Land
      
      </a>
      <ul>
        <CustomA to="#home">Home</CustomA>
        <CustomA to="#about">About</CustomA>
      </ul>
    </nav>
  );
}

function CustomA({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <a href={to} {...props}>
        {children}
      </a>
    </li>
  );
}

// eslint-disable-next-line no-unused-vars
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
