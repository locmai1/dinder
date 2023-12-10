import "../styles/SignUp.css";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [warning, setWarning] = useState(false);

  const onSignUpClick = () => {
    if (password !== confirmPassword) {
      setWarning(true);
      alert("Your passwords must match");
    } else if (email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      // @TODO: Create a new user
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className="SignUpContainer">
      <div className="SignUpTitle">Sign up</div>
      <div type="text" id="email" className="SignUpSubtitle">
        Login
      </div>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="SignUpInput"
      />
      <div className="SignUpSubtitle" style={{ marginTop: 8 }}>
        Password
      </div>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          setWarning(false);
        }}
        className="SignUpInput"
        style={{ border: warning ? "1px solid red" : "none" }}
      />
      <div className="SignUpSubtitle" style={{ marginTop: 8 }}>
        Confirm Password
      </div>
      <input
        type="password"
        id="password"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
          setWarning(false);
        }}
        className="SignUpInput"
        style={{ border: warning ? "1px solid red" : "none" }}
      />
      <div className="SignUpButton" onClick={onSignUpClick}>
        Sign up
      </div>
    </div>
  );
}
