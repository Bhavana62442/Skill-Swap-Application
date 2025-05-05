import React, { useState } from "react";
import "../css/Profile.css";

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Profile saved successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          location: "",
          availability: "",
        });
      } else {
        alert("Failed to save profile!");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving profile!");
    }
  };

  return (
    <div className="profile-container">
      <h1>Create Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="availability"
          placeholder="Availability"
          value={formData.availability}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
