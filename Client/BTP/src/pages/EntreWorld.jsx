import React, { useState } from 'react';
import '../styles/EntreWorld.css';

const EntreWorld = () => {
  const [messages, setMessages] = useState([
    { text: 'Welcome to EntreWorld! How can I assist you today?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');

      // Simulate bot response
      setTimeout(() => {
        setMessages([...newMessages, { text: "I'm here to help with your entrepreneurial queries.", sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="entre-world-container">
      <div className="chat-header">EntreWorld Chat</div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          type="text"
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button className="send-button" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default EntreWorld;
