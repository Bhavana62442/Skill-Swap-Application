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

// Set up Socket.IO
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

const io = socketIo(server);  // Initialize Socket.IO

// Handle socket connections
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for incoming messages
  socket.on('message', (data) => {
    console.log('Message received:', data);
    // Broadcast the message to the other user
    socket.broadcast.emit('message', data);
  });

  // Listen for video call requests
  socket.on('video-call-request', (data) => {
    console.log('Video call request:', data);
    socket.broadcast.emit('video-call-request', data);  // Broadcast to the other user
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
