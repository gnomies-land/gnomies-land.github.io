import logo from "../assets/site-title.png";
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <header className="App-header" id="home">
        <img src={logo} className="App-image" alt="logo" />
        <h2>Welcome to Gnomies Land!</h2>
        <p>Embark on an epic journey with the Gnomies!</p>
        <p>Adventure awaits, so join us now.</p>
        <Link
          className="App-link"
          to="https://twitter.com/gnomies_land"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit us on Twitter
        </Link>
        <p>Prefer Telegram? Join our community <Link className="App-link" to="https://t.me/GnomiesLand" target="_blank" rel="noopener noreferrer">here</Link>!</p>
      </header>
    );
  }
  
