import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Profile.css';

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = "fsd"; // Replace with the logged-in user's ID (from session or context)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/skills/${userId}`);
        setUserProfile(response.data[0]); // Assuming the response returns an array of profiles, take the first one
      } catch (err) {
        setError('Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  // Mock project status data (since it's not in the API response)
  const projectStatus = [
    { name: "Web Design", progress: 70 },
    { name: "Website Markup", progress: 50 },
    { name: "One Page", progress: 60 },
    { name: "Mobile Template", progress: 40 },
    { name: "Backend API", progress: 80 },
  ];

  return (
    <div className="profile-wrapper">
      <div className="profile-sidebar">
        <div className="avatar">
          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Avatar" />
        </div>
        <h2>{userProfile.displayName || "N/A"}</h2>
        <p className="title">{userProfile.skillName || "N/A"}</p>
        <p className="location">{userProfile.location || "N/A"}</p>
        <div className="actions">
          <button className="follow-btn">Follow</button>
          <button className="message-btn">Message</button>
        </div>
        <div className="social-links">
          <div className="social-link">
            <span className="icon">🌐</span>
            <a href="https://bootdey.com" target="_blank" rel="noopener noreferrer">bootdey.com</a>
          </div>
          <div className="social-link">
            <span className="icon">🐱</span>
            <a href="https://github.com/bootdey" target="_blank" rel="noopener noreferrer">bootdey</a>
          </div>
          <div className="social-link">
            <span className="icon">🐦</span>
            <a href="https://twitter.com/bootdey" target="_blank" rel="noopener noreferrer">@bootdey</a>
          </div>
          <div className="social-link">
            <span className="icon">📸</span>
            <a href="https://instagram.com/bootdey" target="_blank" rel="noopener noreferrer">bootdey</a>
          </div>
          <div className="social-link">
            <span className="icon">📘</span>
            <a href="https://facebook.com/bootdey" target="_blank" rel="noopener noreferrer">bootdey</a>
          </div>
        </div>
      </div>

      <div className="profile-main">
        <div className="info-section">
          <div className="info-item">
            <span>Full Name</span>
            <span>{userProfile.fullName || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Email</span>
            <span>{userProfile.email || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Phone</span>
            <span>{userProfile.phone || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Mobile</span>
            <span>{userProfile.mobile || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Address</span>
            <span>{userProfile.location || "N/A"}</span>
          </div>
        </div>

        <button className="edit-btn">Edit</button>

        <div className="status-section">
          <h3>Skills & Details</h3>
          <div className="info-item">
            <span>Skill Name</span>
            <span>{userProfile.skillName || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Category</span>
            <span>{userProfile.category || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Description</span>
            <span>{userProfile.description || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Skill Level</span>
            <span>{userProfile.skillLevel || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Availability</span>
            <span>{userProfile.availability || "N/A"}</span>
          </div>
          <div className="info-item">
            <span>Created At</span>
            <span>{new Date(userProfile.createdAt).toLocaleString()}</span>
          </div>
          <div className="info-item">
            <span>Updated At</span>
            <span>{new Date(userProfile.updatedAt).toLocaleString()}</span>
          </div>
        </div>

        <div className="status-section">
          <h3>Project Status</h3>
          {projectStatus.map((status, index) => (
            <div key={index} className="status-item">
              <span>{status.name}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${status.progress}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;