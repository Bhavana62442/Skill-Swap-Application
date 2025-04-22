import { useState } from 'react';
import axios from 'axios';
import '../css/AddSkills.css';

const SetProfile = () => {
  const [formData, setFormData] = useState({
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
      const res = await axios.post('http://localhost:5000/api/users/SET-PROFILE', formData);
      alert('✅ ' + res.data.message);
      // Reset form after successful submission
      setFormData({
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

export default SetProfile;