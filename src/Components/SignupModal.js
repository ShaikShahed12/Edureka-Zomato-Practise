// src/components/SignupModal.js
import React, { useState } from "react";
import { Modal } from 'react-responsive-modal';
import axios from '../axios'; // Adjust the import based on your axios instance
import 'react-responsive-modal/styles.css';

const SignupModal = ({ open, onClose }) => {
  const [signupData, setSignupData] = useState({ email: "", name: "", password: "" });
  const [signupError, setSignupError] = useState("");

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      const res = await axios.post("/auth/signup", signupData);
      console.log("Signup success:", res.data);
      onClose();
      setSignupError("");
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      setSignupError(error.response.data.message || "Signup failed");
    }
  };

  return (
    <Modal open={open} onClose={onClose} center>
      <h2>Create an Account</h2>
      <div className="modal-content">
        {signupError && <div className="error">{signupError}</div>}
        <div className="modal-field my-2">
          <input type="email" id="email" name="email" placeholder="Email" onChange={handleSignupChange} />
        </div>
        <div className="modal-field my-2">
          <input type="text" id="name" name="name" placeholder="Enter Your name" onChange={handleSignupChange} />
        </div>
        <div className="modal-field my-2">
          <input type="password" id="password" name="password" placeholder="Password" onChange={handleSignupChange} />
        </div>
        <div className="modal-buttons mx-2 my-2">
          <button className="loginButton btn btn-primary mx-2" onClick={handleSignup}>Create an Account</button>
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

export default SignupModal;
