import React, { useState } from "react";
import "../styles/EntreWorld.css";

// Function to clean unnecessary characters and blank lines
const cleanBoxCharacters = (text) => {
  return text
    .replace(/^Message\s*\n?/gm, '') // Remove the "Message" prefix
    .replace(/^Response \(\d+(\.\d+)?s\)\s*/gm, '') // Remove the "Response (x.xs)" prefix
    .replace(/[┃┏┓┗┛━╺╸╼╾─│║╔╗╝╚╬╠╣╦╩╨╥╡╞╛╘╤╧╪]+/g, '') // Remove box/line drawing characters
    .replace(/^\s*[\r\n]/gm, '') // Remove blank lines
    .trim();
};




// Function to format the server's response into lists and paragraphs
const formatResponse = (text) => {
  const cleanedText = cleanBoxCharacters(text);
  const lines = cleanedText.split("\n");
  const formatted = lines.map((line) => {
    if (/^\d+\.|\•/.test(line.trim())) {
      // Treat numbered or bullet points as list items
      return { type: "list", content: line.trim() };
    }
    return { type: "paragraph", content: line.trim() };
  });
  return formatted;
};

const EntreWorld = () => {
  const [messages, setMessages] = useState([
    { type: "server", text: "Welcome to EntreWorld! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://entrepreneurship-guided-agent-2.onrender.com/api/v1/agent-response";

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { type: "user", text: input }]);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();
      const formattedResponse = formatResponse(data.response || "No response received.");

      // Add formatted server response to chat
      setMessages((prev) => [...prev, { type: "server", text: formattedResponse }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { type: "server", text: "Error reaching server." }]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const loadPreviousChat = (n) => {
    setMessages([
      { type: "server", text: `This is previous chat #${n}. Output would load here.` }
    ]);
  };

  return (
    <div className="entre-wrapper">
      {sidebarOpen && (
        <div className="sidebar">
          <button className="toggle-btn" onClick={() => setSidebarOpen(false)}>❌</button>
          <h2>EntreWorld</h2>
          <button className="new-chat" onClick={() => setMessages([])}>+ New Chat</button>
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
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.type === "user" ? "user-message" : "server-message"}`}
            >
              {Array.isArray(msg.text) ? (
                <div>
                  {msg.text.map((block, i) => (
                    block.type === "list" ? (
                      <li key={i} className="list-item">{block.content}</li>
                    ) : (
                      <p key={i} className="paragraph">{block.content}</p>
                    )
                  ))}
                </div>
              ) : (
                msg.text
              )}
            </div>
          ))}
          {loading && <p><em>Typing...</em></p>}
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
