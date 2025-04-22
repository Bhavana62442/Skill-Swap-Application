import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import '../css/Settings.css';

const Settings = () => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
    bio: '',
    location: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (auth.currentUser) {
      setUserData(prev => ({
        ...prev,
        displayName: auth.currentUser.displayName || '',
        email: auth.currentUser.email || '',
        bio: auth.currentUser.bio || '',
        location: auth.currentUser.location || ''
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const user = auth.currentUser;
      
      // Update display name
      if (userData.displayName !== user.displayName) {
        await updateProfile(user, { displayName: userData.displayName });
      }
      
      // Update email
      if (userData.email !== user.email) {
        await updateEmail(user, userData.email);
      }
      
      // Update password if provided
      if (userData.newPassword && userData.newPassword === userData.confirmPassword) {
        await updatePassword(user, userData.newPassword);
      }
      
      setSuccessMessage('Profile updated successfully!');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="settings-container">
      <h2>Account Settings</h2>
      
      {successMessage && <div className="alert success">{successMessage}</div>}
      {errorMessage && <div className="alert error">{errorMessage}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Display Name</label>
          <input
            type="text"
            name="displayName"
            value={userData.displayName}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={userData.newPassword}
            onChange={handleChange}
            placeholder="Leave blank to keep current"
          />
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            placeholder="Leave blank to keep current"
          />
        </div>
        
        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={userData.bio}
            onChange={handleChange}
            rows="3"
          />
        </div>
        
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleChange}
          />
        </div>
        
        <button type="submit" className="save-button">Save Changes</button>
      </form>
      
      <div className="danger-zone">
        <h3>Danger Zone</h3>
        <button className="delete-account">Delete Account</button>
      </div>
    </div>
  );
};

export default Settings;