import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Messaging.css';

const Messaging = () => {
  const { userId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Fetch conversation with userId
    const mockMessages = [
      { id: 1, sender: 'John', text: 'Hi there!', timestamp: '10:30 AM' },
      { id: 2, sender: 'You', text: 'Hello!', timestamp: '10:32 AM' },
      { id: 3, sender: 'John', text: 'Are you still interested in the skill swap?', timestamp: '10:33 AM' },
    ];
    setMessages(mockMessages);
    setRecipient('John Doe');
  }, [userId]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="messaging-container">
      <div className="conversation-header">
        <h3>Conversation with {recipient}</h3>
      </div>
      
      <div className="messages-list">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender === 'You' ? 'sent' : 'received'}`}>
            <div className="message-content">
              <p>{msg.text}</p>
              <span className="timestamp">{msg.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      
      <form className="message-input" onSubmit={handleSend}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messaging;