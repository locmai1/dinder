import "./styles/Login.css";

export default function Login() {
	return (
		<div className="Login">
			<div
				style={{
					fontSize: "48px",
					fontWeight: "700",
				}}>
				din<span style={{ color: "#FFD233" }}>der</span>
			</div>

			<div className="input">
				<div style={{ textAlign: "left" }}>Login</div>
				<input type="text" id="email" className="text-input"></input>
			</div>

			<div className="input">
				<div style={{ textAlign: "left" }}>Password</div>
				<input type="password" id="password" className="text-input"></input>
			</div>

			<div className="primary-button">Login</div>

			<a href="/signup" style={{ color: "black" }}>
				Sign Up
			</a>
		</div>
	);
}
