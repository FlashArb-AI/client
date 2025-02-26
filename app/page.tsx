"use client";
import React, { useState } from "react";

const ChatComponent = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const agentId = "FlashArb-AI"; // Change this as needed

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = { sender: "You", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const serverPort = 3001;
      const response = await fetch(
        `http://localhost:${serverPort}/${agentId}/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: input,
            userId: "user",
            userName: "User",
          }),
        }
      );

      const data = await response.json();
      data.forEach((message: { text: string }) =>
        setMessages((prev) => [
          ...prev,
          { sender: "Agent", text: message.text },
        ])
      );
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput(""); // Clear input after sending
  };

  return (
    <div className="max-w-lg mx-auto p-4 border rounded shadow">
      <div className="h-64 overflow-y-auto border-b p-2">
        {messages.map((msg, index) => (
          <p
            key={index}
            className={
              msg.sender === "You" ? "text-blue-500" : "text-green-500"
            }
          >
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
