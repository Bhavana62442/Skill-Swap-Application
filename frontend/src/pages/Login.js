import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Google!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider("microsoft.com");
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in with Microsoft!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <span className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </span>

        <button type="submit" >Login</button>

        <div className="divider">or</div>

        <div className="signin-label">Sign in with:</div>

        <div className="icon-row">
          <FaGoogle
            size={30}
            color="#00332f"
            className="auth-icon"
            onClick={handleGoogleLogin}
          />
          <FaMicrosoft
            size={30}
            color="#00332f"
            className="auth-icon"
            onClick={handleMicrosoftLogin}
          />
        </div>

        <div className="signup-text">
          No account?{" "}
          <span  className="signup-link" onClick={() => navigate("/register")}>Sign up</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
