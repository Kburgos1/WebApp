import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "@aws-amplify/auth"; // Modular import for signOut
import "./AuthPage.css";
import Login from "./Login";
import Register from "./Register";

function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up
  const navigate = useNavigate();

  // Clear session on component mount (Amplify Gen 2 way)
  useEffect(() => {
    async function clearSession() {
      try {
        await signOut();
        console.log("User signed out successfully.");
      } catch (err) {
        console.error("Error during sign out:", err.message);
      }
    }
    clearSession();
  }, []);

  // Toggle between login and register views
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="auth-page-container">
      <h2>{isSignIn ? "Welcome Back." : "Join YoGo."}</h2>
      <div className="auth-toggle-buttons">
        <button
          className={isSignIn ? "active" : ""}
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
        <button
          className={!isSignIn ? "active" : ""}
          onClick={() => setIsSignIn(false)}
        >
          Sign Up
        </button>
      </div>

      {/* Render the appropriate component */}
      {isSignIn ? <Login /> : <Register />}

      {/* Toggle text below the form */}
      <p className="toggle-text">
        {isSignIn ? "No Account? " : "Already Have an Account? "}
        <span onClick={handleToggle} style={{ cursor: "pointer" }}>
          {isSignIn ? "Create one!" : "Sign In!"}
        </span>
      </p>
    </div>
  );
}

export default AuthPage;
