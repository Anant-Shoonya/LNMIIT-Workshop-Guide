import React, { useState } from "react";
import { FaBars, FaCog, FaCommentDots } from "react-icons/fa";
import "../styles/EntreWorld.css";

const EntreWorld = () => {
  const [messages, setMessages] = useState([
    { text: "Welcome to EntreWorld! How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Function to start a new chat
  const startNewChat = () => {
    setMessages([{ text: "New chat started! How can I assist you?", sender: "bot" }]);
  };

  // Function to load previous chats
  const loadPreviousChat = (chatNumber) => {
    setMessages([
      { text: `This is a conversation from Previous Chat ${chatNumber}`, sender: "bot" },
      { text: "Hello! How can I help?", sender: "bot" }
    ]);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages([
          ...newMessages,
          { text: "I'm here to help with your entrepreneurial queries.", sender: "bot" }
        ]);
      }, 1000);
    }
  };

  return (
    <div className="entre-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaBars />
        </button>
        <h2 className="sidebar-title">EntreWorld</h2>
        <button className="new-chat" onClick={startNewChat}>+ New Chat</button>
        <div className="chat-history">
          <p onClick={() => loadPreviousChat(1)}><FaCommentDots /> Previous Chat 1</p>
          <p onClick={() => loadPreviousChat(2)}><FaCommentDots /> Previous Chat 2</p>
          <p onClick={() => loadPreviousChat(3)}><FaCommentDots /> Previous Chat 3</p>
        </div>
        <div className="settings">
          <FaCog /> Settings
        </div>
      </div>

      {/* Chat Window */}
      <div className="chat-container">
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
    </div>
  );
};

export default EntreWorld;
