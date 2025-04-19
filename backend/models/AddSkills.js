// models/Skill.js
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skillName: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  skillLevel: { type: String, required: true },
  location: { type: String, default: 'Remote' },
  availability: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
