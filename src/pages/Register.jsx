import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./Login.css";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  // SUCCESS MESSAGE

  const [successMessage,
    setSuccessMessage] =
    useState("");

  // ERROR MESSAGE

  const [errorMessage,
    setErrorMessage] =
    useState("");

  const handleRegister =
    async (e) => {

      e.preventDefault();

      try {

        await axios.post(
          "http://localhost:8081/auth/register",
          {
            name,
            email,
            password,
          }
        );

        // SUCCESS MESSAGE

        setSuccessMessage(
          "✅ Compte créé avec succès"
        );

        setErrorMessage("");

        // CLEAR INPUTS

        setName("");
        setEmail("");
        setPassword("");

        // REDIRECT AFTER 2 SECONDS

        setTimeout(() => {

          navigate("/");

        }, 2000);

      } catch (error) {

        console.log(error);

        setErrorMessage(
          "❌ Erreur lors de l'inscription"
        );

        setSuccessMessage("");

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
            Create Account
          </h1>

          <p>
            Create your new account
          </p>

          {/* SUCCESS MESSAGE */}

          {successMessage && (

            <div
              style={{
                backgroundColor:
                  "#d4edda",

                color: "#155724",

                padding: "12px",

                borderRadius: "10px",

                marginBottom: "20px",

                fontWeight: "bold",

                textAlign: "center",
              }}
            >
              {successMessage}
            </div>

          )}

          {/* ERROR MESSAGE */}

          {errorMessage && (

            <div
              style={{
                backgroundColor:
                  "#f8d7da",

                color: "#721c24",

                padding: "12px",

                borderRadius: "10px",

                marginBottom: "20px",

                fontWeight: "bold",

                textAlign: "center",
              }}
            >
              {errorMessage}
            </div>

          )}

          <form
            onSubmit={
              handleRegister
            }
          >

            {/* NAME */}

            <div className="input-box">

              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                required
              />

            </div>

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

            {/* BUTTON */}

            <button
              type="submit"
              className="login-btn"
            >
              CREATE ACCOUNT
            </button>

          </form>

          {/* BACK TO LOGIN */}

          <div className="register-link">

            Already have an account ?

            <span
              onClick={() =>
                navigate("/")
              }
            >
              Back To Login →
            </span>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;