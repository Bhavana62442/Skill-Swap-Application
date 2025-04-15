import React from 'react';
import '../css/Dashboard.css';

const Profile = () => {
  const offeredSkills = ['UI/UX Design', 'Web Development', 'ReactJS'];
  const learnSkills = ['Node.js', 'Figma', 'Data Visualization'];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">SkillX</div>
        <nav>
          <ul>
            <li>🏠 Home</li>
            <li>📚 My Sessions</li>
            <li>👥 Employees</li>
            <li>📝 Notes</li>
          </ul>
        </nav>
        <button className="action-button">+ Create Session</button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1>👤 My Profile</h1>

        <div className="overview-cards" style={{ flexWrap: 'wrap' }}>
          {/* Profile Card */}
          <div className="card" style={{ flex: '1 1 250px' }}>
            <img 
              src="https://via.placeholder.com/100" 
              alt="Profile" 
              style={{ borderRadius: '50%', marginBottom: '1rem' }}
            />
            <h2>Nicolas Henry</h2>
            <p>📍 LA, USA</p>
            <p>💼 Bio: Frontend Dev passionate about UI & Design</p>
            <div style={{ marginTop: '1rem' }}>
              <button className="action-button">✏️ Edit Profile</button>
            </div>
          </div>

          {/* Skills Offered */}
          <div className="card" style={{ flex: '1 1 300px', textAlign: 'left' }}>
            <h3>✅ Skills You Offer</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {offeredSkills.map((skill, i) => (
                <span key={i} style={{
                  background: '#88d8c0',
                  color: '#00332f',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>{skill}</span>
              ))}
            </div>
            <button className="action-button" style={{ marginTop: '1rem' }}>➕ Add Skill</button>
          </div>

          {/* Skills to Learn */}
          <div className="card" style={{ flex: '1 1 300px', textAlign: 'left' }}>
            <h3>📘 Skills You Want to Learn</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {learnSkills.map((skill, i) => (
                <span key={i} style={{
                  background: '#b5ead7',
                  color: '#00332f',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}>{skill}</span>
              ))}
            </div>
            <button className="action-button" style={{ marginTop: '1rem' }}>➕ Add Skill</button>
          </div>

          {/* Availability */}
          <div className="card" style={{ flex: '1 1 250px' }}>
            <h3>📅 Availability</h3>
            <p>Mon - Fri: 5 PM - 9 PM</p>
            <p>Sat - Sun: 10 AM - 6 PM</p>
            <button className="action-button" style={{ marginTop: '1rem' }}>🕒 Edit Availability</button>
          </div>

          {/* Ratings & Feedback */}
          <div className="card" style={{ flex: '1 1 350px' }}>
            <h3>⭐ Ratings & Feedback</h3>
            <p style={{ fontSize: '1.4rem' }}>⭐⭐⭐⭐☆ (4.5)</p>
            <ul style={{ paddingLeft: '1rem', color: '#00332f' }}>
              <li>"Great session on UI tips!" - Alice</li>
              <li>"Very friendly and explains well." - Mark</li>
              <li>"Helped me understand React hooks." - Dana</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
