import { useState } from "react";
import "./styles/Navbar.css";

export default function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);

	return (
		<nav className="navbar">
			<div className="logo">
				din<span style={{ color: "#FFD233" }}>der</span>
			</div>
			<button
				id="menu-toggle"
				className="MenuToggle"
				onClick={() => setExpandNavbar(!expandNavbar)}>
				<img src="img/hamburger.svg" />
			</button>
			<ul className="nav-links">
				<li>
					<a href="/Explore">Explore</a>
				</li>
				<li>
					<a href="/Hosting">Hosting</a>
				</li>
				<li>
					<a href="/Pending">Joining</a>
				</li>
				<li>
					<a href="/Profile">Profile</a>
				</li>
			</ul>
			<ul
				className="nav-links nav-links-mobile"
				style={{ display: expandNavbar ? "flex" : "none" }}>
				<li>
					<a href="/Explore">Explore</a>
				</li>
				<li>
					<a href="/Hosting">Hosting</a>
				</li>
				<li>
					<a href="/Pending">Joining</a>
				</li>
				<li>
					<a href="/Profile">Profile</a>
				</li>
			</ul>
		</nav>
	);
}
