import React, { useState } from "react";
import "../styles/EntreWorld.css";

const cleanBoxCharacters = (text) => {
  return text
    .replace(/[┃┏┓┗┛━╺╸╼╾─│║╔╗╝╚╬╠╣╦╩╨╥╡╞╛╘╤╧╪]+/g, '') // strip all box/line drawing characters
    .replace(/^\s*[\r\n]/gm, '') // remove blank lines
    .trim();
};


const EntreWorld = () => {
  const [responseText, setResponseText] = useState("Welcome to EntreWorld! How can I assist you today?");
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://entrepreneurship-guided-agent-2.onrender.com/api/v1/agent-response";

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
  
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
  
      const data = await response.json();
      const cleanedText = cleanBoxCharacters(data.response || "No response received.");
      setResponseText(cleanedText);
    } catch (err) {
      console.error(err);
      setResponseText("Error reaching server.");
    } finally {
      setLoading(false);
      setInput("");
    }
  };
  

  const loadPreviousChat = (n) => {
    setResponseText(`This is previous chat #${n}. Output would load here.`);
  };

  

  return (
    <div className="entre-wrapper">
      {sidebarOpen && (
        <div className="sidebar">
          <button className="toggle-btn" onClick={() => setSidebarOpen(false)}>❌</button>
          <h2>EntreWorld</h2>
          <button className="new-chat" onClick={() => setResponseText("New chat started!")}>+ New Chat</button>
          <div className="chat-history">
            <p onClick={() => loadPreviousChat(1)}>Previous Chat 1</p>
            <p onClick={() => loadPreviousChat(2)}>Previous Chat 2</p>
            <p onClick={() => loadPreviousChat(3)}>Previous Chat 3</p>
          </div>
        </div>
      )}

      {!sidebarOpen && (
        <button className="open-sidebar" onClick={() => setSidebarOpen(true)}>☰</button>
      )}

      <div className="main-area">
        <div className="output-box">
          {loading ? <p><em>Typing...</em></p> : <pre>{responseText}</pre>}
        </div>

        <div className="chat-input-bar">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your question..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default EntreWorld;
