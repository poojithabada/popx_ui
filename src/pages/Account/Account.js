import React from "react";
import "./Account.css";

const Account = () => {
  return (
    <div className="account-container">
      <h3 className="account-title">Account Settings</h3>
      <div className="account-header">
        <div className="avatar-wrapper">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200"
            alt=""
            className="avatar"
          />
          <span className="avatar-icon">📷</span>
        </div>
        <div>
          <div className="account-name">Marry Doe</div>
          <div className="account-email">Marry@Gmail.Com</div>
        </div>
      </div>
      <p className="account-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Account;
