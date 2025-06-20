import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register.js";
import Account from "./pages/Account/Account.js";

function App() {
  return (
    <BrowserRouter basename="/popx_ui">
      <div className="app-container">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
