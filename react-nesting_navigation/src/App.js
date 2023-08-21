import "./styles.css";

import { Avatar } from "./components/Avatar.js";
import { Logo } from "./components/Logo.js";
import { Header } from "../src/components/Header.js";
import { Navigation } from "./components/Navigation.js";
import { Link } from "./components/Link.js";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link className="navigation__link" href="#home">
            Home
          </Link>
          <Link className="navigation__link" href="#about">
            About
          </Link>
          <Link className="navigation__link" href="#impressum">
            Impressum
          </Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <Avatar />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
