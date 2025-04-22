import { useState } from 'react';
import axios from 'axios';
import '../css/AddSkills.css';

const AddSkills = () => {
  const [formData, setFormData] = useState({
    uid: '',
    username: '',
    displayName: '',
    fullName: '',
    email: '',
    phone: '',
    mobile: '',
    skillName: '',
    category: '',
    description: '',
    skillLevel: '',
    location: '',
    availability: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/skills', formData);
      alert('✅ ' + res.data.message);
      // Reset form after successful submission
      setFormData({
        uid: '',
        username: '',
        displayName: '',
        fullName: '',
        email: '',
        phone: '',
        mobile: '',
        skillName: '',
        category: '',
        description: '',
        skillLevel: '',
        location: '',
        availability: ''
      });
    } catch (err) {
      alert('❌ Error adding skill.');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="add-skills-container">
      <form className="add-skills-form" onSubmit={handleSubmit}>
        <h2>Add a New Skill</h2>

        {/* New Fields for User Information */}
        <input
          name="uid"
          value={formData.uid}
          onChange={handleChange}
          placeholder="User ID"
          required
        />
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          placeholder="Display Name"
          required
        />
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
        />
        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Mobile (optional)"
        />

        {/* Existing Fields for Skill Information */}
        <input
          name="skillName"
          value={formData.skillName}
          onChange={handleChange}
          placeholder="Skill Name"
          required
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="skillLevel"
          value={formData.skillLevel}
          onChange={handleChange}
          placeholder="Skill Level"
          required
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location (optional)"
        />
        <input
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          placeholder="Availability"
          required
        />
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
};

export default AddSkills;
