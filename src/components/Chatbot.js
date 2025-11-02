import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    // Later: send to AI backend
  };

  return (
    <div className="chatbot">
      <h4>💬 AI Health Assistant</h4>
      <div className="chat-window">
        {messages.map((m, i) => (
          <p key={i} className={m.sender === "user" ? "user-msg" : "bot-msg"}>
            {m.text}
          </p>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask about your report..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
