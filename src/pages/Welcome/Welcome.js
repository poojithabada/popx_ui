import React from "react";
import { useNavigate } from "react-router-dom";
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container">
      <div className="welcome-wrapper">
        <h2 className="title">Welcome to PopX</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className="btn primary" onClick={() => navigate("/register")}>
          Create Account
        </button>
        <button className="btn secondary" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Welcome;
