import "../styles/Login.css";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {
    if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      // @TODO: Authenticate user
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="LoginContainer">
      <div className="LoginTitle">
        din<span style={{ color: "#FFD233" }}>der</span>
      </div>
      <div className="LoginSubtitle">Login</div>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="LoginInput"
      />
      <div className="LoginSubtitle" style={{ marginTop: 8 }}>
        Password
      </div>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className="LoginInput"
      />
      <div className="LoginButton" onClick={onLoginClick}>
        Login
      </div>
      <a href="/signup" className="LoginSignUpText">
        Sign Up
      </a>
    </div>
  );
}
