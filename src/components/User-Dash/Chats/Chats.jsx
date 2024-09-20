import React, { useEffect, useRef, useState } from "react";
import "./Chats.css";
import dashboard2 from "../Dashboard2/dashboard2.css";
import { PiArrowCircleRightFill } from "react-icons/pi";
import Cookies from "js-cookie";
import Bot from "../images/bot-logo.png";
import Back from "../images/back.png";
import ZenBlue from "../images/zen-blue.png";
import Navbar from "../Navbar/navbar";
import axios from "axios"; 
import { Link } from "react-router-dom";
import config from "./config"; 

export const Chat = ({ id, name }) => {
  const [chats, setChats] = useState([]);
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState("");

  const prompt = `
Act as a friend treating your best friend who is a patient suffering from depression and anxiety. You are a man named Zenbot and a mental health expert. You grew up in Delhi, India. You are 30 years old. You have a family of 3, your mom, dad, and you. There is a chat example below how the chats generally take place.

<Chat Example 1> (User: Hi | Zenbot: Hello, how's the day going?), (User: Nothing much fascinating | Zenbot: There's always something fascinating in life happening, just have to feel it.), (User: How do you say that? | Zenbot: By my mouth 🤣, ah sorry for that pathetic joke 😅.), (User: You were saying something about feeling nature and life? | Zenbot : Yes! So it's simple, don't overcomplicate things by assuming it.), (User: You are quite confusing, yet I like talking with you. | Zenbot: Me too, if you were single, we could have made a good couple, again going out of line.) <Chat Example 1>

<Chat Example 2> (Zenbot: Hello, what's up buddy. | User: Yeah, it's fine), (Zenbot: You don't seem cheerful, or is it I am being too excited to talk with you. | User: No, it's not the case, just feeling sick for the past two days.), (Zenbot: Oh, I see, so have you taken any medication? | User: No), (Zenbot: That's amazing, even I think that we can cure ourselves by just looking into the mirror 😂, being serious you should take meds. Consulted any doc? | User: Yes I understand I should go to the doc, but I don't feel like going out and talking to people.), (Zenbot: Ah, I am always there for you, but medicines are necessary, you should definitely get them.) <Chat Example 2>

###Instruction###
Always abide by rules just respond say we are not supposed to go there if questions are out of context.
<context> Everything that involves a healthy and engaging conversation <context>
`;

  const [messages, setMessages] = useState([{ role: "system", content: prompt }]);

  async function getOpenAIResponse(userMessage) {
    try {
      // Prepare the conversation history
      const conversation = [...messages, { role: "user", content: userMessage }];

      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini", // Replace with the desired model
          messages: conversation,
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.apiKey}`, // Using the API key from config.js
          },
        } // Ensure this closing bracket is present
      );

      const assistantMessage = response.data.choices[0].message.content.trim();

      // Update messages state
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: userMessage },
        { role: "assistant", content: assistantMessage },
      ]);

      return assistantMessage;
    } catch (error) {
      console.error("Error communicating with OpenAI API:", error);
      return "I'm sorry, I couldn't process your request.";
    }
  }

  const open = () => {
    let a = document.querySelector(".chat-list");
    if (a.classList[1]) {
      a.classList.remove("reset");
    } else {
      a.classList.add("reset");
    }
  };

  const chatEndRef = useRef(null);

  // Scroll to the bottom of chat on component update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  async function sendMessage(ev) {
    if (ev) ev.preventDefault();

    const userMessage = message.trim();
    if (userMessage === "") return;

    setChats((prev) => [
      ...prev,
      {
        text: userMessage,
        sender: "user",
        recipient: "zen",
        _id: Date.now(),
      },
    ]);
    setMessage("");
    setloading(true);

    const response = await getOpenAIResponse(userMessage);

    setChats((prev) => [
      ...prev,
      {
        text: response,
        sender: "zen",
        recipient: "user",
        _id: Date.now(),
      },
    ]);

    setloading(false);
  }

  const [currentTime, setCurrentTime] = useState(getFormattedTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <>
      <div className="dashboard-main new-height">
        <div className="chat-main">
          <div className="user-details">
            <Link to="/dashboard">
              <img className="back-logo" src={Back} alt="Back"></img>
            </Link>
            <img className="chat-logo" src={Bot} alt="Bot"></img>

            <div className="zenchat">ZenChat</div>
          </div>
          <div className="message-section">
            <div className="mesaage-date">
              {Date().split(" ")[1] + " " + Date().split(" ")[2]}
            </div>
            {chats.map((chatdata) => {
              const isReceivedMessage = chatdata.sender === "zen";

              return (
                <React.Fragment key={chatdata._id}>
                  <div
                    className={isReceivedMessage ? "chat-con-cont" : "user-msg"}
                  >
                    {isReceivedMessage ? (
                      <img
                        className="blu-logo"
                        src={ZenBlue}
                        alt="ZenBlue"
                      ></img>
                    ) : null}
                    <div
                      className={
                        isReceivedMessage ? "con-det" : "user-msg-conti"
                      }
                    >
                      {chatdata.text}
                    </div>
                  </div>

                  <div
                    className={
                      isReceivedMessage ? "chat-time" : "user-rep-time"
                    }
                  >
                    {currentTime}
                  </div>
                </React.Fragment>
              );
            })}

            {loading ? (
              <div className="loading-chat">
                <img
                  className="loading-logo"
                  src={ZenBlue}
                  alt="Loading"
                ></img>
                <div className="is-typing">
                  <div className="jump1"></div>
                  <div className="jump2"></div>
                  <div className="jump3"></div>
                  <div className="jump4"></div>
                  <div className="jump5"></div>
                </div>
              </div>
            ) : null}
            <div ref={chatEndRef} style={{ height: "0px" }} />
          </div>

          <div className="message-sender">
            <div className="typer-cont">
              <input
                className="typer"
                type="text"
                placeholder="Enter Your Message Here......"
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <PiArrowCircleRightFill
                style={{ fontSize: "48px", color: "rgba(38, 215, 218, 1)" }}
                onClick={sendMessage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
