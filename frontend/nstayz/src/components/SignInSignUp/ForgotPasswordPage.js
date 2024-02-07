

import React, { useState } from 'react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Add logic to handle the "Forgot Password?" action
    console.log('Forgot Password clicked for email:', email);
    // You can implement password recovery functionality here
  };

  return (
    <div className="ForgotPasswordPage">
      <div className="AppHeader">
        <h1>NSTAYZ</h1>
        <p>Enter the email address associated with your account,</p>
        <p>and we'll send you a link to reset your password.</p>
      </div>
      <form>
        <label>
          Enter your email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleForgotPassword}>
          Submit
        </button>
      </form>
      <p>Don't have an account? <a href="/">Sign up</a></p>
    </div>
  );
};

export default ForgotPasswordPage;
