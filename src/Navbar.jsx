import "./styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        din<span style={{ color: "#FFD233" }}>der</span>
      </a>
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
    </nav>
  );
}
