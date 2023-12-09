import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <nav className="navbar">
      <a className="logo" href="/">
        din<span style={{ color: "#FFD233" }}>der</span>
      </a>
      <button
        id="menu-toggle"
        className="MenuToggle"
        onClick={() => setExpandNavbar(!expandNavbar)}
      >
        <img src="img/hamburger.svg" alt="Hamburger Icon" />
      </button>
      <ul className="nav-links">
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/hosting">Hosting</a>
        </li>
        <li>
          <a href="/joining">Joining</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
      <ul
        className="nav-links nav-links-mobile"
        style={{ display: expandNavbar ? "flex" : "none" }}
      >
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/hosting">Hosting</a>
        </li>
        <li>
          <a href="/joining">Joining</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}