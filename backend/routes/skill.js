const express = require('express');
const router = express.Router();
const Skill = require('../models/AddSkills.js'); // 🔥 Import the model

// POST - Add new skill
router.post('/', async (req, res) => {
  try {
    const { 
      uid, 
      username, 
      displayName, 
      fullName, 
      email, 
      phone, 
      mobile, 
      skillName, 
      category, 
      description, 
      skillLevel, 
      location, 
      availability 
    } = req.body;

    // Check for missing required fields
    if (!uid || !username || !displayName || !fullName || !email || !skillName || !category || !description || !skillLevel || !availability) {
      return res.status(400).json({ success: false, message: 'Missing fields' });
    }

    const newSkill = new Skill({ 
      uid, 
      username, 
      displayName, 
      fullName, 
      email, 
      phone, 
      mobile, 
      skillName, 
      category, 
      description, 
      skillLevel, 
      location, 
      availability 
    });

    await newSkill.save();
    res.status(201).json({ success: true, message: 'Skill added!', skill: newSkill });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET - Fetch all skills (generic)
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch skills' });
  }
});

// GET - Fetch skills by user ID (uid)
router.get("/:uid", async (req, res) => {
  const { uid } = req.params;
  try {
    const profile = await Skill.find({ uid: uid }); // This fetches all skills for the given user
    if (profile.length === 0) return res.status(404).json({ message: "Profile not found" });
    res.json(profile); // Return the full profile data including all fields
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
