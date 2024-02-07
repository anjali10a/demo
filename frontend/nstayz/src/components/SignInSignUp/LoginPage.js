import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const Login = async (event) => {
    if (event) {
      event.preventDefault();
    }
    try {
      await axios.post("http://localhost:8081/api/v1/regi/login", {
        email: email,
        password: password,
      });
      setMessage("User Login Successfully");
      setTimeout(() => {
        setMessage("");
        navigate("/home");
      }, 2000);
    } catch (err) {
      setMessage("User Login Failed");
      resetForm();
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setRememberMe("");
  };

  const handleLogin = () => {
    if (email && password && rememberMe) {
      Login();
    } else {
      let errorMessage = "Login failed. ";

      if (!email) {
        errorMessage += "Please provide a valid email. ";
      }

      if (!password) {
        errorMessage += "Password is required. ";
      }

      if (!rememberMe) {
        errorMessage += "Please agree to the terms. ";
      }

      setMessage(errorMessage.trim());
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
    navigate("/forgot-password");
  };

  return (
    <div className="login-container">
      <h2>LOG IN TO NSYAYZ</h2>
      <form>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <div className="checkbox">
        <label className="terms-label">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />{" "}
            Remember me
          </label>
        </div>
        <br />{" "}
        <button type="button" onClick={handleLogin}>
          Log In
        </button>
      </form>
      <br />
      <div>
        <button type="button" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
      </div>
      <ul>
        <li>
          <span>Don't have an account? </span>
          <Link to="/register">Create Account</Link>
        </li>
      </ul>
      {/* Message outside login-container */}
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

export default LoginPage;
