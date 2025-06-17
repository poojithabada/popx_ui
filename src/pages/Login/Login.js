import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2 className="login-heading">
        Signin to your <br />
        PopX account
      </h2>
      <p className="login-description">
        Lorem ipsum dolor sit amet, <br />
        consectetur adipiscing elit.
      </p>

      <div className="input-group">
        <label className="login-label">Email Address</label>
        <input
          className="login-input"
          type="email"
          placeholder="Enter email address"
        />
      </div>

      <div className="input-group">
        <label className="login-label">Password</label>
        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
        />
      </div>

      <button className="login-button" onClick={() => navigate("/account")}>
        Login
      </button>
    </div>
  );
};

export default Login;
