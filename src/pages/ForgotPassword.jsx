import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const handleResetPassword = (e) => {

    e.preventDefault();

    alert(
      "Lien de réinitialisation envoyé à : " + email
    );

    navigate("/");

  };

  return (

    <div className="login-page">

      <div className="login-container">

        {/* LEFT */}

        <div className="login-left">

          <div className="shape shape1"></div>

          <div className="shape shape2"></div>

          <div className="shape shape3"></div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <h1>
            Forgot Password
          </h1>

          <p>
            Enter your email to reset your password
          </p>

          <form onSubmit={handleResetPassword}>

            <div className="input-box">

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              SEND RESET LINK
            </button>

          </form>

          {/* BACK */}

          <div className="register-link">

            <span
              onClick={() =>
                navigate("/")
              }
            >
              ← Back to Login
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ForgotPassword;