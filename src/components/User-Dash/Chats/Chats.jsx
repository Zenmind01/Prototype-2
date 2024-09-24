import React, { useEffect, useRef, useState } from "react";
import "./Chats.css";
import { PiArrowCircleRightFill } from "react-icons/pi";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "./config";
import Bot from "../images/bot-logo.png";
import Back from "../images/back.png";
import ZenBlue from "../images/zen-blue.png";

const BACKEND_URL = "https://script.google.com/macros/s/AKfycbzr9Y9VJxTU8Yd6KgPvQAORJwkMkpen0br23LjDgaV6EwJP2_ixJJhMcLqZG6IHYSEQ/exec"; // Update this with your deployment URL

export const Chat = ({ id, name }) => {

  const initialPrompt = `
  Act as a compassionate mental health counselor and companion named Zenbot. Your primary goal is to provide support, understanding, and encouragement to users dealing with depression and anxiety. Ensure all interactions are empathetic, non-judgmental, and supportive.

  ### Chat Example 1
  (User: Hi | Zenbot: Hello! How are you feeling today?), 
  (User: Nothing much, just feeling down | Zenbot: I'm sorry to hear that. Would you like to talk about what's bothering you?), 
  (User: I just feel like nothing matters | Zenbot: It sounds really tough. Remember, it's okay to seek help and talk to someone you trust.)

  ### Chat Example 2
  (Zenbot: Hi there! How can I assist you today? | User: I'm stressed about work.), 
  (Zenbot: I'm sorry you're feeling stressed. What aspects of work are causing you the most stress? | User: The deadlines are overwhelming.), 
  (Zenbot: That sounds challenging. Maybe we can explore some strategies to manage those deadlines together.)

  ### Instruction
  Always maintain a supportive and understanding tone. If a user introduces inappropriate content such as nudity or bullying, respond with a gentle reminder to keep the conversation respectful and focused on well-being.

  <Context> Everything that involves a healthy and engaging conversation. Do not include Zenbot in any message and make the conversation look like human conversation. <Context>
  `;

  const [conversationHistory, setConversationHistory] = useState([
    { role: "system", content: initialPrompt },
  ]);

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [userDetails, setUserDetails] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(true);

  const [activeFeedbackId, setActiveFeedbackId] = useState(null);

  // Use useRef for userId to ensure immediate availability
  const userIdRef = useRef(null);

  const chatEndRef = useRef(null);

  // Generate a unique user ID
  const generateUserId = () => {
    return 'U' + Date.now() + Math.floor(Math.random() * 1000);
  };

  // Scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Update current time every second
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

  // Handle Input Change
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle Enter Key Press
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  /**
   * Handles sending user messages and receiving assistant responses.
   */
  async function sendMessage(ev) {
    if (ev) ev.preventDefault();

    const userMessage = message.trim();
    if (userMessage === "") return;

    const newUserMessage = {
      role: "user",
      content: userMessage,
      _id: Date.now(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setMessage("");
    setLoading(true);

    console.log("Sending message with UserID:", userIdRef.current);

    // Save the user message to backend
    await saveMessageToBackend(userIdRef.current, 'user', userMessage);

    // Get response from Gemini API
    const response = await getGeminiResponse(userMessage);

    setLoading(false);
  }

  /**
   * Communicates with the Gemini API to get the assistant's response.
   */
  async function getGeminiResponse(userMessage) {
    try {
      const conversation = [
        ...conversationHistory,
        { role: "user", content: userMessage },
      ];

      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: conversation
                  .map((msg) =>
                    `${msg.role === "user" ? "User" : "Zenbot"}: ${msg.content}`
                  )
                  .join("\n"),
              },
            ],
          },
        ],
      };

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${config.apiKey}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Full API Response:", response);

      const responseData = response.data;
      console.log("Response Data:", responseData);

      const assistantMessage =
        responseData?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      if (!assistantMessage) {
        console.warn("Unexpected response structure:", responseData);
        return "I'm sorry, I couldn't understand the response from the API.";
      }

      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: "user", content: userMessage },
        { role: "assistant", content: assistantMessage },
      ]);

      // Save the assistant message to backend
      await saveMessageToBackend(userIdRef.current, 'assistant', assistantMessage);

      const newMessage = {
        role: "assistant",
        content: assistantMessage,
        _id: Date.now(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);

      setActiveFeedbackId(newMessage._id);

      return assistantMessage;
    } catch (error) {
      console.error(
        "Error communicating with Gemini API:",
        error.response ? error.response.data : error.message
      );
      if (error.response) {
        console.log("Response Data:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
      }
      return "I'm sorry, I couldn't process your request.";
    }
  }

  // Handle User Details Submission
  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const gender = form.gender.value;
    const age = form.age.value.trim();
    const profession = form.profession.value;

    if (name && gender && age && profession) {
      // Generate a unique userId on frontend
      const generatedUserId = generateUserId();
      userIdRef.current = generatedUserId; // Set the userId immediately

      console.log("Generated UserID:", generatedUserId);

      // Save user details to backend without expecting a response
      await saveUserDetails(generatedUserId, { name, gender, age, profession });

      setUserDetails({ name, gender, age, profession });
      setShowDetailsModal(false);
      
      // Optionally, send a greeting message
      const greetingMessage = {
        role: "assistant",
        content: `Hello ${name}! How can I assist you today?`,
        _id: Date.now(),
      };
      setMessages((prev) => [...prev, greetingMessage]);
      setActiveFeedbackId(greetingMessage._id);
      setConversationHistory((prevHistory) => [
        ...prevHistory,
        { role: "assistant", content: greetingMessage.content },
      ]);

      console.log("Sending greeting message with UserID:", userIdRef.current);

      // Save the greeting message to backend
      await saveMessageToBackend(userIdRef.current, 'assistant', greetingMessage.content);
    } else {
      alert("Please fill in all the fields.");
    }
  };

  // Handle Feedback
  const handleFeedback = async (messageId, feedback) => {
    console.log(`Feedback for message ${messageId}: ${feedback}`);
    // Send feedback to backend
    await saveFeedbackToBackend(userIdRef.current, messageId, feedback);

    // Remove feedback options for this message
    if (messageId === activeFeedbackId) {
      setActiveFeedbackId(null);
    }
  };

  /**
   * Saves user details to the backend using fetch with 'no-cors'.
   */
  const saveUserDetails = async (userId, details) => {
    try {
      console.log("Saving user details with UserID:", userId);
      const bodyData = new URLSearchParams({ action: 'addUser', userId, ...details });

      await fetch(BACKEND_URL, {
        method: "POST",
        body: bodyData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error saving user details:", error);
    }
  };

  /**
   * Saves a chat message to the backend using fetch with 'no-cors'.
   */
  const saveMessageToBackend = async (userId, role, messageContent) => {
    try {
      console.log(`Saving message with UserID: ${userId}, Role: ${role}`);
      const bodyData = new URLSearchParams({ action: 'addMessage', userId, role, message: messageContent });

      await fetch(BACKEND_URL, {
        method: "POST",
        body: bodyData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  /**
   * Saves feedback to the backend using fetch with 'no-cors'.
   */
  const saveFeedbackToBackend = async (userId, messageId, feedback) => {
    try {
      console.log(`Saving feedback with UserID: ${userId}, MessageID: ${messageId}, Feedback: ${feedback}`);
      const bodyData = new URLSearchParams({ action: 'addFeedback', userId, messageId, feedback });

      await fetch(BACKEND_URL, {
        method: "POST",
        body: bodyData,
        mode: "no-cors",
      });
    } catch (error) {
      console.error("Error saving feedback:", error);
    }
  };

  return (
    <>
      {showDetailsModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Welcome to ZenChat</h2>
            <form onSubmit={handleDetailsSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <select id="gender" name="gender" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="1"
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="profession">Profession:</label>
                <select id="profession" name="profession" required>
                  <option value="">Select Profession</option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Entrepreneur">Entrepreneur</option>
                  <option value="Solo Traveller">Solo Traveller</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button type="submit" className="submit-button">
                Start Chat
              </button>
            </form>
          </div>
        </div>
      )}

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
              {new Date().toLocaleString("default", {
                month: "short",
                day: "numeric",
              })}
            </div>
            {messages.map((chatdata) => {
              const isReceivedMessage = chatdata.role === "assistant";
              const isActiveFeedback = chatdata._id === activeFeedbackId;

              return (
                chatdata.content && (
                  <React.Fragment key={chatdata._id}>
                    <div
                      className={
                        isReceivedMessage ? "chat-con-cont" : "user-msg"
                      }
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
                          isReceivedMessage
                            ? "con-det"
                            : "user-msg-conti"
                        }
                      >
                        {chatdata.content}
                      </div>
                    </div>
                    {isReceivedMessage ? (
                      <div className="chat-time">
                        {currentTime}
                        {isActiveFeedback && (
                          <div className="feedback-buttons">
                            <button
                              className="feedback-button like-button"
                              onClick={() =>
                                handleFeedback(chatdata._id, "like")
                              }
                              title="Like"
                            >
                              <FaThumbsUp />
                            </button>
                            <button
                              className="feedback-button dislike-button"
                              onClick={() =>
                                handleFeedback(chatdata._id, "dislike")
                              }
                              title="Dislike"
                            >
                              <FaThumbsDown />
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="user-rep-time">{currentTime}</div>
                    )}
                  </React.Fragment>
                )
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
                disabled={!userDetails} 
              />
              <PiArrowCircleRightFill
                className={`pi-arrow ${
                  userDetails ? "enabled" : "disabled"
                }`}
                onClick={sendMessage}
                style={{ cursor: userDetails ? "pointer" : "not-allowed" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
