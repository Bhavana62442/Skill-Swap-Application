import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import "../css/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      alert("Registered successfully!");
      navigate("/Dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Signed up with Google!");
      navigate("/Dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleMicrosoftRegister = async () => {
    const provider = new OAuthProvider("microsoft.com");
    try {
      await signInWithPopup(auth, provider);
      alert("Signed up with Microsoft!");
      navigate("/Dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h2>Create Your Skill Swap Account</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          required
        />

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

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>

        <div className="divider">or</div>

        <div className="signin-label">Sign up with:</div>

        <div className="icon-row">
          <FaGoogle
            size={30}
            color="#00332f"
            className="auth-icon"
            onClick={handleGoogleRegister}
          />
          <FaMicrosoft
            size={30}
            color="#00332f"
            className="auth-icon"
            onClick={handleMicrosoftRegister}
          />
        </div>

        <div className="signup-text">
          Already have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/login")}>
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
