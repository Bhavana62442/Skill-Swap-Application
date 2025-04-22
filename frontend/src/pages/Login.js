import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase"; // ⬅️ add db
import { doc, getDoc } from "firebase/firestore"; // ⬅️ Firestore tools
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import "../css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUserProfile = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      navigate("/dashboard");
    } else {
      navigate("/set-profile");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;
      await checkUserProfile(uid);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const uid = result.user.uid;
      await checkUserProfile(uid);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider("microsoft.com");
    try {
      const result = await signInWithPopup(auth, provider);
      const uid = result.user.uid;
      await checkUserProfile(uid);
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
