import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "sherief@email.com" && password === "she12345") {
      setLoggedIn(true);
      setError("");
    } else {
      setLoggedIn(false);
      setError("Invalid email or password");
    }
  };
  if (loggedIn) {
    return <Main />;
  }
  return (
    <div className="login__container">
      <div className="popup__add">
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input--login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input--login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="btnLogin__container">
          <button className="btn--login" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const element = document.getElementById("root");
ReactDOM.createRoot(element).render(<Login />);
