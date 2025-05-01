// src/components/MessagingPage.js
import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // adjust as needed

const MessagingPage = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    // 1) create socket connection
    socketRef.current = io(SOCKET_SERVER_URL);

    // 2) listen for incoming messages
    socketRef.current.on('receive-message', (message, senderId) => {
      setMessages((prev) => [
        ...prev,
        { text: message, byMe: senderId === socketRef.current.id },
      ]);
    });

    // cleanup on unmount
    return () => socketRef.current.disconnect();
  }, []);

  const sendMessage = () => {
    if (!text.trim()) return;
    // emit to server
    socketRef.current.emit('send-message', text, socketRef.current.id);
    // optimistically add to UI
    setMessages((prev) => [...prev, { text, byMe: true }]);
    setText('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              ...(m.byMe ? styles.myMessage : styles.otherMessage),
            }}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div style={styles.inputBar}>
        <input
          style={styles.input}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
        />
        <button style={styles.button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  messages: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    background: '#f4f4f4',
  },
  message: {
    padding: '8px 12px',
    borderRadius: '16px',
    margin: '6px 0',
    maxWidth: '70%',
  },
  myMessage: {
    background: '#007BFF',
    color: '#fff',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    background: '#e5e5ea',
    color: '#000',
    alignSelf: 'flex-start',
  },
  inputBar: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ddd',
    background: '#fff',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    marginLeft: '10px',
    padding: '0 20px',
    border: 'none',
    borderRadius: '20px',
    background: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default MessagingPage;
