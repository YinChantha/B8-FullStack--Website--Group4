"use client";

import React from "react";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";

export default function Chat() {
  const [messages, setmessages] = useState([]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const handleSendMessage = () => {
    const userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") {
      return;
    }

    const chatbotReply = generateChatbotReply(userInput);
    const userTimestemp = new Date().toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });
    const chatbotTimestemp = new Date().toLocaleString("en-US", {
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });

    setmessages((prevMessages) => [
      ...prevMessages,
      { sender: "You", message: userInput, timestemp: userTimestemp },
      { sender: "Chatbot", message: chatbotReply, timestemp: chatbotTimestemp },
    ]);

    document.getElementById("user-input").value = "";
  };

  const generateChatbotReply = (userInput) => {
    return "Thank you for asking!.";
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="w-[500px] h-[700px]">
      <div className="flex flex-col items-center p-4">
        <div className="flex-col items-center mt-2">
          <Image
            src="/images/vichet.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex-col items-center mt-3">
          <h1 className="font-bold text-[18px] text-center text-black -mt-3">
            {"Hak Vichet"}
          </h1>
          <p className="text-gray-500 text-[16px] -mt-3 text-center">
            {"hak.vichet19@kit.edu.kh"}
          </p>
        </div>
        <div
          ref={chatContainerRef}
          className="w-[500px] h-[450px] mt-5 rounded-lg scroll-smooth overflow-y-auto"
        >
          <div>
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center text-black">
                <p className="text-[24px] font-bold text-center mt-2">
                  Hey there,
                </p>
                <p className="text-[24px] font-bold text-center -mt-2">
                  How can I assist you today?
                </p>
              </div>
            )}
          </div>
          {messages.map((message, index) => (
            <div key={index} className="flex flex-col w-full px-4">
              {/* <div className='w-[300px] '> */}
              <div
                className={`flex flex-row w-[300px] justify-between -mb-2 ${
                  message.sender === "You" ? "self-end" : " self-start"
                }`}
              >
                <p className="flex text-[15px] text-black">
                  {message.sender === "You" ? "" : "Chatbot"}
                </p>
                <p className="flex text-[12px] text-gray-600">
                  {message.timestemp}
                </p>
              </div>
              <div
                className={`flex max-w-[300px] rounded-lg p-2 mb-2 ${
                  message.sender === "You"
                    ? " flex bg-red-500 self-end"
                    : "bg-gray-100 self-start"
                }`}
              >
                <p
                  className={`${
                    message.sender === "You"
                      ? "flex text-[20px] text-white items-end justify-end"
                      : "flex text-black text-[20px] mx-auto"
                  }`}
                >
                  {message.message}
                </p>
              </div>
            </div>
            // </div>
          ))}
        </div>

        <div className="absolute w-full bottom-0">
          <div className="flex flex-row justify-between gap-2 mx-5 py-4">
            <div className="flex w-full">
              <input
                id="user-input"
                type="message"
                className="text-[15px] w-full text-gray-800 border-1 border-gray-500 rounded-lg px-4 outline-none"
                autoComplete="off"
                placeholder="Message..."
                onKeyDown={handleInputKeyDown}
              />
            </div>
            <div
              onClick={handleSendMessage}
              className="flex w-[50px] h-[50px] bg-red-500 rounded-lg px-3 py-3 hover:bg-red-600"
              aria-label="Send"
            >
              <LuSend size={25} className="m-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
