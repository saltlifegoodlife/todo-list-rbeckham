import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./loginButton.css";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="div-login">
      <div className="card-login">
        <h2 className="login-h2">Today's Tasks</h2>
        <p className="login-p">
          Please login to start your daily tasks. We hope you have a productive
          day!
        </p>
        <button
          className="login-btn"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login/Register
        </button>
      </div>
    </div>
  );
};

export default LoginButton;
