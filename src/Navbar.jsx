import "./styles/Navbar.css";

export default function Navbar() {
	return (
		<nav class="navbar">
			<div class="logo">
				din<span style={{ color: "#FFD233" }}>der</span>
			</div>
			<ul class="nav-links">
				<li>
					<a href="/Explore">Explore</a>
				</li>
				<li>
					<a href="/Hosting">Hosting</a>
				</li>
				<li>
					<a href="/Pending">Pending</a>
				</li>
				<li>
					<a href="/Profile">Profile</a>
				</li>
			</ul>
		</nav>
	);
}
