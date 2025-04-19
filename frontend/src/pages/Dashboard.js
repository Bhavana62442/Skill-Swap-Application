import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../css/Dashboard.css'

//sample
const sampleRequests = [
  { id: 1, skill: 'Web Development', requestedBy: 'John Doe', status: 'Pending' },
  { id: 2, skill: 'Graphic Design', offeredBy: 'Jane Smith', status: 'Accepted' },
];

const sampleSessions = [
  { id: 1, skill: 'Photoshop', user: 'Alice Brown', date: 'May 3rd, 2:00 PM', status: 'Upcoming' },
  { id: 2, skill: 'Web Development', user: 'Mark Johnson', date: 'April 25th, 10:00 AM', status: 'Completed' },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('John Doe');
  const [skillRequests, setSkillRequests] = useState(sampleRequests);
  const [sessions, setSessions] = useState(sampleSessions);

  const handleRequestAction = (id, action) => {
    setSkillRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id
          ? { ...req, status: action === 'cancel' ? 'Cancelled' : 'Accepted' }
          : req
      )
    );
  };

  const handleSessionAction = (id, action) => {
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === id
          ? { ...session, status: action === 'cancel' ? 'Cancelled' : 'Rescheduled' }
          : session
      )
    );
  };

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <header className="top-nav">
        <div className="logo">Skill Swap</div>
        <input type="text" placeholder="Search skills or users..." className="search-bar" />
        <div className="profile-icon">👤</div>
      </header>

      <div className="dashboard-layout">
        {/* Sidebar Menu */}
        <aside className="sidebar-menu">
          <ul>
            <li>Home</li>
            <li>My Profile</li>
            <li>Explore Skills</li>
            <li>My Skill Requests</li>
            <li>Messages</li>
            <li>Settings</li>
            <li>Log Out</li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="main-content">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h2>Welcome, {userName}!</h2>
            <div className="quick-overview">
              <p>Skills Offered: 3</p>
              <p>Skills Needed: 2</p>
              <p>Total Skill Swaps/Requests: 5</p>
              <button>Edit Profile</button>
              <button onClick={() => navigate("/addskills")}>Add New Skill</button>
            </div>
          </section>

          {/* Active Skill Requests */}
          <section className="active-requests">
            <h3>My Active Skill Requests</h3>
            <div className="requests">
              <div className="requests-sent">
                <h4>Requests Sent</h4>
                {skillRequests
                  .filter((req) => req.status === 'Pending')
                  .map((req) => (
                    <div key={req.id} className="request-card">
                      <p>Skill Requested: {req.skill}</p>
                      <p>Requested by: {req.requestedBy}</p>
                      <p>Status: {req.status}</p>
                      <button onClick={() => handleRequestAction(req.id, 'cancel')}>Cancel Request</button>
                      <button>View Details</button>
                    </div>
                  ))}
              </div>

              <div className="requests-received">
                <h4>Requests Received</h4>
                {skillRequests
                  .filter((req) => req.status === 'Accepted')
                  .map((req) => (
                    <div key={req.id} className="request-card">
                      <p>Skill Offered: {req.skill}</p>
                      <p>Offered by: {req.offeredBy}</p>
                      <p>Status: {req.status}</p>
                      <button>Accept Request</button>
                      <button>Reject Request</button>
                      <button>Start Conversation</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Upcoming/Completed Sessions */}
          <section className="sessions">
            <h3>Upcoming Sessions</h3>
            {sessions
              .filter((session) => session.status === 'Upcoming')
              .map((session) => (
                <div key={session.id} className="session-card">
                  <p>Session with: {session.user}</p>
                  <p>Skill: {session.skill}</p>
                  <p>Date & Time: {session.date}</p>
                  <button onClick={() => handleSessionAction(session.id, 'cancel')}>Cancel Session</button>
                  <button>Reschedule</button>
                </div>
              ))}

            <h3>Completed Sessions</h3>
            {sessions
              .filter((session) => session.status === 'Completed')
              .map((session) => (
                <div key={session.id} className="session-card">
                  <p>Session with: {session.user}</p>
                  <p>Skill: {session.skill}</p>
                  <p>Date & Time: {session.date}</p>
                  <button>Rate & Review</button>
                </div>
              ))}
          </section>

          {/* Skill Highlights */}
          <section className="skill-highlights">
            <h3>Suggested Skills for You</h3>
            <ul>
              <li>Digital Marketing</li>
              <li>Data Science</li>
            </ul>

            <h3>Trending Skills</h3>
            <ul>
              <li>Web Development</li>
              <li>Machine Learning</li>
            </ul>
          </section>

          {/* Notifications */}
          <section className="notifications">
            <h3>Recent Activity</h3>
            <p>Alice Brown accepted your request for Photoshop skill swap.</p>
            <p>You have a new message from Mark Johnson.</p>
          </section>

          {/* Quick Actions */}
          <section className="quick-actions">
            <button>Add New Skill</button>
            <button>Send a New Request</button>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/terms">Terms & Privacy</a></li>
        </ul>
        <div className="social-media-icons">Facebook | Twitter | LinkedIn</div>
      </footer>
    </div>
  );
};

export default Dashboard;
