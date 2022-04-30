import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-wrap">
      <i className="fa-brands fa-github brand"></i>
      <h2>Sign in to GitHub</h2>
      <div className="input-container">
        <label htmlFor="name">Username or email address</label>
        <input type="text" className="user-input" />
        <label htmlFor="name">Password</label>
        <input type="password" className="user-input" />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
