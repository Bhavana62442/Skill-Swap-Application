const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  uid: { type: String, required: true }, // User ID
  username: { type: String, required: true }, // Username
  displayName: { type: String, required: true }, // Display name
  fullName: { type: String, required: true }, // Full name
  email: { type: String, required: true }, // Email
  phone: { type: String, required: false }, // Phone number (optional)
  mobile: { type: String, required: false }, // Mobile number (optional)
  skillName: { type: String, required: true }, // Name of the skill
  category: { type: String, required: true },  // Skill category
  description: { type: String, required: true }, // Description of the skill
  skillLevel: { type: String, required: true }, // Skill proficiency level (e.g., Beginner, Intermediate, Expert)
  location: { type: String, default: 'Remote' }, // Location (default is "Remote")
  availability: { type: String, required: true }, // Availability status
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
