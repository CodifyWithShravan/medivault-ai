import React, { useState } from "react";
import "./Chatbot.css";
import { FaComments, FaTimes } from "react-icons/fa";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 I’m your MediVault Assistant. How can I help you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { text: "Thanks for your message! 😊 I’ll help you with that.", sender: "bot" }
      ]);
    }, 800);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <FaComments size={25} />
        </button>
      )}

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h4>MediVault Assistant</h4>
            <FaTimes className="close-btn" onClick={() => setIsOpen(false)} />
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
