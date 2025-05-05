const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  fullName: { type: String, required: true }, // Full name
  email: { type: String, required: true }, // Email
  phone: { type: String, required: false }, // Phone number (optional)
  location: { type: String, default: 'Remote' }, // Location (default is "Remote")
  availability: { type: String, required: true }, // Availability status
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
