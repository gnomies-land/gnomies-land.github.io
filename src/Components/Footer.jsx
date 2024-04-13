import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useResolvedPath } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={
      useResolvedPath(window.location.pathname).pathname === "/phantom"
      ? "footer phantom"
      : "footer"
    }>
      <div className="container">
        <div className="footer-info">
          <ul>
            <li>
              <Link to="https://twitter.com/gnomies_land" target="_blank" className="footer-link">
                <FaXTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://t.me/GnomiesLand" target="_blank" className="footer-link">
                <FaTelegram />
              </Link>
            </li>
            <li>
              <Link target="_blank" to="mailto:contact@gnomies.land" className="footer-link">
                <IoMdMail />
              </Link>
            </li>
          </ul>
        </div>
        <p>&copy; 2024 Gnomies Land</p>
      </div>
    </footer>
  );
}
