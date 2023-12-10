import "../styles/Login.css";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const baseURL = "http://localhost:3001";

  const handleLogin = async () => {
    try {
      const response = await fetch(baseURL + "/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);

        login(email, password);
        navigate("/");
      } else {
        console.error("Error logging in", response.statusText);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="LoginContainer">
      <div className="LoginTitle">
        din<span style={{ color: "#FFD233" }}>der</span>
      </div>

      <div className="input">
        <div style={{ textAlign: "left" }}>Login</div>
        <input
          type="text"
          id="email"
          className="text-input"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="input">
        <div style={{ textAlign: "left" }}>Password</div>
        <input
          type="password"
          id="password"
          className="text-input"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="primary-button" onClick={handleLogin}>
        Login
      </div>

      <a href="/signup" style={{ color: "black" }}>
        Sign Up
      </a>
    </div>
  );
}
