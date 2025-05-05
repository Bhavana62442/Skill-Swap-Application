require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const socketIo = require('socket.io');  // Import Socket.IO

const skillRoutes = require('./routes/skill.js'); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

app.use('/api/skills', skillRoutes);  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));