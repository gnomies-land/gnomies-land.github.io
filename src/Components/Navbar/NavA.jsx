import { useMatch, useResolvedPath } from "react-router-dom";

export default function NavA({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  let activeClass = "active";
  if (useResolvedPath(window.location.pathname).pathname === "/phantom") {
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
