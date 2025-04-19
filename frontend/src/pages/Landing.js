import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Landing.css"; 
import { FaUserPlus, FaHandsHelping, FaExchangeAlt, FaGraduationCap } from "react-icons/fa";


function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <header className="navbar">
        <div className="logo">SKILL <span>SWAP</span></div>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Explore Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        </nav>
      </header>

      <section className="hero" id="home">
        <h1>Swap Skills, Learn Together</h1>
        <p>Exchange skills with others and learn something new at no cost.</p>
        <div className="hero-buttons">
          <button onClick={() => navigate("/register")}>Get Started</button>
          <button onClick={() => navigate("/explore")}>Explore Skills</button>
        </div>
      </section>

      <section className="features" id="features">
        <div className="card button-card" onClick={()=>navigate("/register")}>
    <       FaUserPlus className="card-icon" />
            <h3>Sign Up</h3>
            <p>Create your free account</p>
        </div>
        <div className="card">
            <FaHandsHelping className="card-icon" />
            <h3>Offer Skills</h3>
            <p>List the skills you can share with others</p>
         </div>
        <div className="card">
            <FaExchangeAlt className="card-icon" />
            <h3>Match</h3>
            <p>Find people looking for your skills</p>
        </div>
         <div className="card">
         <FaGraduationCap className="card-icon" />
            <h3>Learn</h3>
            <p>Gain new skills</p>
        </div>
        </section>

    </div>
  );
}

export default Landing;
