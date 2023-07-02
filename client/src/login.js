import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import logo from "./logo.png";
import wastage from "../src/images/wastage.jpeg";
import experimenting from "../src/images/scientist.png";
import element from "../src/images/elements-2.png";

function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);

  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      const response = await axios.post("/api/send-otp", {
        mobileNumber: "+91" + mobileNumber,
      });
      setOTP(response.data.otp);
      setShowOTPInput(true);
      setMessage("OTP sent successfully!");
    } catch (error) {
      console.error(error);
      setMessage("Failed to send OTP");
    }
  };

  const handleLogin = async () => {
    if (mobileNumber === "" || enteredOTP === "") {
      setMessage("Please enter mobile number and OTP");
      return;
    }

    try {
      const response = await axios.post("/api/login", {
        mobileNumber: "+91" + mobileNumber,
        enteredOTP: enteredOTP,
      });

      if (otp === enteredOTP) {
        setMessage("Login successful!");
        navigate("/lab");
      } else {
        setMessage("Invalid OTP");
      }
    } catch (error) {
      console.error(error);
      setMessage("Failed to authenticate user");
    }
  };

  return (
    <div className="login-page">
      <div className="login-elements">
        <img src={element} alt="" />
      </div>
      <div className="login-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h2>Login</h2>
        <div className="input-container">
          <div className="underline-input">
            <span className="country-code">+91</span>
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <div className="underline"></div>
          </div>
          <button className="otp" onClick={handleSendOTP}>
            Get OTP
          </button>
        </div>
        <br />
        {showOTPInput && (
          <>
            <div className="otp-input">
              <input
                type="text"
                placeholder="Enter OTP"
                onChange={(e) => setEnteredOTP(e.target.value)}
              />
              <br />
            </div>
          </>
        )}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <br />
        <p>{message}</p>
      </div>
      <span className="quate">" You Are Moving Towards the</span>
      <span className="quate-2"> Solution of this Problems!!! "</span>
      <div className="image-container">
        <img src={wastage} alt="" />
      </div>
      <div className="image-container-2">
        <img src={experimenting} alt="" />
      </div>
    </div>
  );
}

export default Login;
