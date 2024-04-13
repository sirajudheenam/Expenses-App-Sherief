import React, { useEffect, useState } from "react";

export default function Login({loggedIn, setLoggedIn}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (email === "user@domain.com" && password === "123456789") {
      // Set cookie to indicate user is logged in
      // Cookie expires in 1 hour [3600 seconds] (adjust as needed)
      document.cookie = "loggedIn=true; max-age=3600"; 
      setLoggedIn(true);
      setError("");
    } else {
      setLoggedIn(false);
      setError("Invalid email or password");
    }
  };

  useEffect(() => {
    // Check if user is already logged in using cookie
    const isLoggedIn = document.cookie.includes("loggedIn=true");
    if (isLoggedIn) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]); // Empty dependency array ensures this effect runs once on component mount



  return (
    <div className="login__container">
      <div className="popup__add">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input--login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
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