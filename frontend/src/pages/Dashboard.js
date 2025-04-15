import React from "react";
import "../css/Dashboard.css";
import { FaCompass, FaEnvelope, FaUser, FaSignOutAlt, FaTachometerAlt, FaSearch, FaHandsHelping, FaCalendarAlt, FaBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2 className="logo">SkillX</h2>
        <nav>
          <ul>
            <li><FaTachometerAlt /> Dashboard</li>
            <li><FaCompass /> Explore</li>
            <li><FaEnvelope /> Messages</li>
            <li ><FaUser /> Profile</li>
            <li><FaSignOutAlt /> Logout</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Welcome Back 👋</h1>

        <div className="overview-cards">
          <div className="card">Active Matches</div>
          <div className="card">Pending Requests</div>
          <div className="card">Scheduled Sessions</div>
          <div className="card">Ratings</div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-buttons">
            <button><FaSearch /> Find a Skill</button>
            <button><FaHandsHelping /> Offer a Skill</button>
            <button><FaCalendarAlt /> Schedule Session</button>
          </div>
        </div>

        <div className="notifications">
          <h2><FaBell /> Notifications</h2>
          <ul>
            <li>No new notifications</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;