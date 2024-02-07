import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const save = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/regi/add",
        {
          name,
          username,
          email,
          state,
          country,
          zip,
          phoneNumber,
          password,
          confirmPassword,
        }
      );
      // Check the response message from the backend
      if (response.data === "Email already exists") {
        setMessage("Email already exists. Please use a different email.");
        setTimeout(() => {
          setMessage("")
        }, 2000);
      } else {
        setMessage("User Registration Successfully");
        setTimeout(() => {
          setMessage("");
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.error("User Registration Failed:", err);
      setMessage("Registration failed. Please try again later.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleRegister = () => {
    if (
      name &&
      username &&
      email &&
      state &&
      country &&
      zip &&
      phoneNumber &&
      password === confirmPassword &&
      termsChecked
    ) {
      save();
    } else if (password !== confirmPassword) {
      setMessage("Registration failed. Ensure passwords match.");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } else {
      setMessage(
        "Registration failed. Please fill in all fields, check your inputs, and agree to the terms."
      );
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };
  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>

        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>

        <label>
          Zip Code:
          <input
            type="text"
            value={zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <div className="check-box">
          <label className="terms-label">
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={() => setTermsChecked(!termsChecked)}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <button type="button" onClick={handleRegister}>
          Sign Up
        </button>
      </form>
      <div className="message-container">
        {message && (
          <div
            className={`message ${
              message.includes("Success") ? "success" : "error"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
