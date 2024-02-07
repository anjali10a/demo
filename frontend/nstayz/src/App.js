import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the change here

import SearchBar from "./components/homepage/SearchBar";

import LoginPage from "./components/SignInSignUp/LoginPage";
import RegisterPage from "./components/SignInSignUp/RegisterPage";
import ForgotPasswordPage from "./components/SignInSignUp/ForgotPasswordPage";
import HomePage from "./components/homepage/homepage";
import { Div } from "./components/header/header";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Change 'Switch' to 'Routes' */}
        <Route path="/d" element={<SearchBar />} />
        <Route path="/e" element={<Div />} />


        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />{" "}
        {/* Change 'Component' to 'element' */}
        <Route path="/home" element={<HomePage />} />

      </Routes>{" "}
      {/* Fix the closing tag of the 'Routes' component */}
    </Router>
  );
};

export default App;
