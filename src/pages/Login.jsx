import React, { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import "./Login.css";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  // LOGIN

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response =
        await axios.post(
          "http://localhost:8081/auth/login",
          {
            email,
            password,
          }
        );

      // SUCCESS LOGIN

      if (
        response.data ===
        "Login Success"
      ) {

        // REDIRECT DIRECTLY
        navigate("/dashboard");

      } else {

        alert(
          "Email ou mot de passe incorrect"
        );

      }

    } catch (error) {

      alert(
        "Erreur serveur"
      );

      console.log(error);

    }

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
            User Login
          </h1>

          <p>
            Welcome back! Please login to your account.
          </p>

          <form onSubmit={handleLogin}>

            {/* EMAIL */}

            <div className="input-box">

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

            </div>

            {/* PASSWORD */}

            <div className="input-box">

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
              />

            </div>

            {/* OPTIONS */}

            <div className="login-options">

              <div>

                <input type="checkbox" />

                <span>
                  Remember me
                </span>

              </div>

              {/* FORGOT PASSWORD */}

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot Password?
              </Link>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >
              LOGIN
            </button>

          </form>

          {/* REGISTER */}

          <div className="register-link">

            Don’t have an account ?

            <span
              onClick={() =>
                navigate("/register")
              }
            >
              Create Your Account →
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;