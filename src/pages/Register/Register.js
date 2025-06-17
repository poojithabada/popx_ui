import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <h2 className="register-title">Create your PopX account</h2>

      <div className="input-group">
        <label className="register-label">
          Full Name <span className="required-star">*</span>
        </label>
        <input type="text" required className="register-input" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label className="register-label">
          Phone number <span className="required-star">*</span>
        </label>
        <input type="tel" required className="register-input" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label className="register-label">
          Email address <span className="required-star">*</span>
        </label>
        <input type="email" required className="register-input" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label className="register-label">
          Password <span className="required-star">*</span>
        </label>
        <input type="password" required className="register-input" placeholder="Marry Doe" />
      </div>

      <div className="input-group">
        <label className="register-label">Company name</label>
        <input type="text" className="register-input" placeholder="Marry Doe" />
      </div>

      <div className="radio-group">
        <label className="radio-title">
          Are you an Agency? <span className="required-star">*</span>
        </label>
        <div className="radio-options">
          <label className="radio-option">
            <input type="radio" name="agency" value="yes" defaultChecked />
            <span>Yes</span>
          </label>
          <label className="radio-option">
            <input type="radio" name="agency" value="no" />
            <span>No</span>
          </label>
        </div>
      </div>

      <button className="register-button" onClick={() => navigate("/account")}>
        Create Account
      </button>
    </div>
  );
};

export default Register;
