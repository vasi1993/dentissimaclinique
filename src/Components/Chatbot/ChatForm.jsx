import React, { useRef } from "react";
import "./Chatbot.css";

const ChatForm = ({ setChatHistory, generateBotResponse, chatHistory }) => {
  const inputRef = useRef();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;
    inputRef.current.value = "";

    setChatHistory((history) => [
      ...history,
      { role: "user", text: userMessage },
    ]);

    setTimeout(() => {
      setChatHistory((history) => [
        ...history,
        { role: "model", text: "Așteaptă..." },
      ]);
      generateBotResponse([
        ...chatHistory,
        {
          role: "user",
          text: `Folosind detaliile furnizate mai sus, vă rugăm să adresați această întrebare: ${userMessage}`,
        },
      ]);
    }, 600);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text "
        placeholder="Scrie o întrebare......"
        className="message-input"
        required
      />
      <button className="material-symbols-outlined">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
