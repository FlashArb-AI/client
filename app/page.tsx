"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
const ChatComponent = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const agentId = "FlashArb-AI";

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
          { sender: "FlashArb-AI", text: message.text },
        ])
      );
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput(""); // Clear input after sending
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full gap-4 overflow-y-auto ">
      {isChatOpen && (
        <div className="flex flex-col h-full w-5/6 overflow-y-auto space-y-4 mt-20">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}
            >
              {" "}
              <strong
                className={`${
                  msg.sender === "You" ? "hidden" : ""
                } block text-sm opacity-75`}
              >
                {msg.sender}
              </strong>
              <div
                className={`max-w-[75%] px-3 py-1.5 rounded-lg text-white  ${
                  msg.sender === "You"
                    ? "bg-[var(--foreground)] text-right"
                    : "bg-gray-700 text-left"
                }`}
              >
                {msg.text}
              </div>{" "}
              <strong
                className={`${
                  msg.sender === agentId ? "hidden" : ""
                } block text-sm opacity-75 mr-4 `}
              >
                {msg.sender}
              </strong>
            </div>
          ))}
        </div>
      )}
      {!isChatOpen && (
        <div className="w-full flex flex-col justify-center items-center gap-3">
          {" "}
          <h1>How can i help you today?</h1>
        </div>
      )}{" "}
      <div
        className={`
           ${isChatOpen ? " mb-8" : ""}
        }  w-1/2 px-7 py-4 rounded-3xl flex flex-row h-24 bg-gray-800 items-center justify-center`}
      >
        <input
          type="text"
          className="w-full bg-transparent outline-none focus:ring-0"
          placeholder="Ask me anything regarding arbitrage or defi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
              setIsChatOpen(true);
            }
          }}
        />
        <button
          className="bg-gradient-to-r from-[var(--foreground)] to-red-900 px-5 py-3 rounded-lg text-red-200 font-semibold flex flex-row gap-2 text-lg justify-center items-center transition-transform duration-300 hover:scale-105"
          onClick={() => {
            sendMessage();
            setIsChatOpen(true); // ✅ Correct way to update state
          }}
        >
          Send <Send />
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
