// src/components/LoginModal.js
import React, { useState } from "react";
import { Modal } from 'react-responsive-modal';
import axios from '../axios'; // Adjust the import based on your axios instance
import 'react-responsive-modal/styles.css';

const LoginModal = ({ open, onClose }) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("/auth/login", loginData);
      console.log("Login success:", res.data);
      onClose();
      setLoginError("");
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      setLoginError(error.response.data.message || "Login failed");
    }
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <h2>Login</h2>
      <div className="modal-content">
        {loginError && <div className="error">{loginError}</div>}
        <div className="modal-field my-2">
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleLoginChange} />
        </div>
        <div className="modal-field my-2">
          <input type="password" id="password" name="password" placeholder="Password" onChange={handleLoginChange} />
        </div>
        <div className="modal-buttons mx-2 my-2">
          <button className="loginButton btn btn-primary mx-2" onClick={handleLogin}>Login</button>
          <button className="cancelButton btn btn-outline-dark" onClick={onClose}>Cancel</button>
        </div>
        <div className="social-login d-flex flex-column gap-2">
          <button className="facebookButton btn btn-outline-primary">Continue with Facebook</button>
          <button className="googleButton btn btn-outline-danger">Continue with Google</button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
