// routes/skills.js
const express = require('express');
const router = express.Router();
const Skill = require('../models/AddSkills.js'); // 🔥 Import the model

// POST - Add new skill
router.post('/', async (req, res) => {
  try {
    const { skillName, category, description, skillLevel, location, availability } = req.body;
    if (!skillName || !category || !description || !skillLevel || !availability) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const newSkill = new Skill({ skillName, category, description, skillLevel, location, availability });
    await newSkill.save();
    res.status(201).json({ success: true, message: 'Skill added!', skill: newSkill });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET - Fetch all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch skills' });
  }
});

module.exports = router;
