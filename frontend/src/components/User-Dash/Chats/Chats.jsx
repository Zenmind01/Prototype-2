import React, { useContext, useEffect, useRef, useState } from "react";
import "./Chats.css";
import dashboard2 from "../Dashboard2/dashboard2.css";

import { PiArrowCircleRightFill } from "react-icons/pi";
import Cookies from "js-cookie";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import Bot from "../images/bot-logo.png";
import Back from "../images/back.png";
import ZenBlue from "../images/zen-blue.png";

import Navbar from "../Navbar/navbar";

import OpenAI from "openai";

export const Chat = ({ id, name }) => {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedfriend, setselectedfriend] = useState(null);
  const [newMessageText, setNewMessageText] = useState("");
  const [messages, setMessages] = useState([]);
  const [friends, setfriends] = useState(null);
  const [friendschat, setfriendschat] = useState(null);
  const [message, setMessage] = useState("");

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function openAI(message) {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
  }

  const open = () => {
    let a = document.querySelector(".chat-list");
    if (a.classList[1]) {
      a.classList.remove("reset");
    } else {
      a.classList.add("reset");
    }
  };
  const containsLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(text);
  };

  // Function to extract the link from a message
  const extractLink = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const match = text.match(urlRegex);
    return match ? match[0] : "";
  };
  useEffect(() => {
    // const users = async () => {
    //   try {
    //     id = Cookies.get("data")
    //     const response = await fetch(
    //       "https://tt-t01-v01.onrender.com/api/users/",
    //       {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (response.ok) {
    //       const data = await response.json();
    //       setfriends(data.data);
    //       // console.log(data)
    //     } else {
    //       console.log("Nothing");
    //       // console.log("Nothing");
    //       // Handle errors here (e.g., show an error message)
    //     }
    //   } catch (error) {
    //     console.log("nothing");
    //     // console.log("nothing");
    //   }
    // };
    // users();
  });
  // useEffect(() => {
  //   const userschat = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://tt-t01-v01.onrender.com/api/message/" +
  //            id  +
  //           "/"+selectedUserId,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setfriendschat(data.data);
  //         console.log(data);
  //       } else {
  //         console.log("Nothing");
  //         // console.log(data);
  //       }
  //     } catch (error) {
  //       console.log("nothing");
  //       // console.log("nothing");
  //     }
  //   };
  //   userschat();
  // },[selectedUserId,message,friendschat]);

  const divUnderMessages = useRef();

  const chatEndRef = useRef(null);

  // Scroll to the bottom of chat on component update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [friendschat]);

  // Add more chat users as needed

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  // useEffect(() => {
  //   connectToWs();
  // }, [selectedUserId]);

  // function connectToWs() {
  //   const ws = new WebSocket("wss://tt-t01-v01.onrender.com");
  //   setWs(ws);
  //   // ws.addEventListener('message', handleMessage);
  //   ws.addEventListener("close", () => {
  //     setTimeout(() => {
  //       console.log("Disconnected. Trying to reconnect.");
  //       connectToWs();
  //     }, 1000);
  //   });
  // }

  // function showOnlinePeople(peopleArray) {
  //   const people = {};
  //   peopleArray.forEach(({ userId, username }) => {
  //     people[userId] = username;
  //   });
  //   setOnlinePeople(people);
  // }

  // function handleMessage(ev) {
  //   const messageData = JSON.parse(ev.data);
  //   console.log({ ev, messageData });
  //   // console.log({ ev, messageData });
  //   if ("online" in messageData) {
  //     showOnlinePeople(messageData.online);
  //   } else if ("text" in messageData) {
  //     if (messageData.sender === selectedUserId) {
  //       setMessages((prev) => [...prev, { ...messageData }]);
  //     }
  //   }
  // }
  async function sendMessage(ev, file = null) {
    console.log("message bhejrha hu .. . . .. . . . . . .");
    if (ev) ev.preventDefault();
    console.log(message);
    await openAI(message).then((value) => {
      console.log(value);
      console.log(value.response != undefined ? value.response : value.error);
      console.log("--->" + newMessageText);
      setNewMessageText("");
      setMessages((prev) => [
        ...prev,
        {
          text: newMessageText,
          sender: "qwertyu",
          recipient: "zen",
          _id: Date.now(),
        },
      ]);
    });
    // ws.send(
    //   JSON.stringify({
    //     sender:id,
    //     recipient: selectedUserId,
    //     text: message,

    //     file,
    //   })
    // );
    // if (file) {
    //   // axios.get('/messages/'+selectedUserId).then(res => {
    //   //   setMessages(res.data);
    //   // });
    // } else {

    // }
    setMessage("");
  }

  // const onlinePeopleExclOurUser = { ...onlinePeople };
  // delete onlinePeopleExclOurUser[id];
  // console.log(onlinePeopleExclOurUser);
  // console.log(onlinePeopleExclOurUser);

  // Initialize with an empty object

  return (
    <>
      <Navbar></Navbar>

      <div className="dashboard-main">
        <div className="dashboard2-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <div className="admin-list-dashboard">
              <a href="/dashboard2" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Dashboard</div>
              </a>
            </div>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            <a href="/chat" className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <a href="/community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            <a className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </a>
            <a href="/payment-history" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment History</div>
            </a>
          </div>
        </div>
        <div className="chat-main">
          <div className="chat-land">
            <div className="chat-box">
              <div className="user-details">
                <img className="back-logo" src={Back}></img>
                <img className="chat-logo" src={Bot}></img>

                <div className="user-name">ZenChat</div>
              </div>
              <div className="message-section">
                {friendschat?.map((chatdata) => {
                  // Convert updatedOn to a Date object and get formatted date and time
                  const updatedDate = new Date(chatdata.updatedOn);
                  const dateOptions = {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  };
                  const timeOptions = { hour: "numeric", minute: "numeric" };
                  const formattedDate = updatedDate.toLocaleDateString(
                    undefined,
                    dateOptions
                  );
                  const formattedTime = updatedDate.toLocaleTimeString(
                    undefined,
                    timeOptions
                  );

                  <div className="mesaage-date">08/08/23</div>;

                  // Determine if the message sender matches the selectedUser
                  const isReceivedMessage =
                    chatdata.sender[0] === selectedUserId;

                  // Assign a className based on the condition
                  const messageClassName = isReceivedMessage
                    ? "receive"
                    : "sender";

                  return (
                    <>
                      <div key={chatdata._id} className={messageClassName}>
                        <div className="message-details">
                          {containsLink(chatdata.text) ? (
                            <>
                              <a
                                style={{ width: "80%" }}
                                href={extractLink(chatdata.text)}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {chatdata.text}
                              </a>
                              <iframe
                                src={extractLink(chatdata.text)}
                                height="400px"
                              />
                            </>
                          ) : (
                            <div className="message-text">{chatdata.text}</div>
                          )}
                          <div className="message-time">
                            <span>Date: {formattedDate}</span>
                            <span>Time: {formattedTime}</span>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
                <div ref={chatEndRef} />
                <div className="mesaage-date">08/08/23</div>

                <div className="chat-con-cont">
                  <img className="blu-logo" src={ZenBlue}></img>
                  <div className="con-det">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    doeiusmod temp or incididunt ut laboreet dolore magna
                    aliqua.piscing elit, sed do eius mod tempor incididuntdg ut
                    labore et dolore magna aliqua?
                  </div>
                </div>

                <div className="chat-time">07:59 pm</div>

                <div className="user-msg">
                  <div className="user-msg-conti">
                    Lorem ipsum dolor sit amet, consectetur adipisc ing
                    elitfsff.
                  </div>

                  <img className="user-reep" src={ZenBlue}></img>
                </div>

                <div className="user-msg-conti">
                  Lorem ipsum dolor sit amet, consectetur adipisc ing elitfsff.
                </div>

                <div className="user-rep-time">08:00 pm</div>

                <div className="loading-chat">
                  <img className="loading-logo" src={ZenBlue}></img>
                  <div className="is-typing">
                    <div className="jump1"></div>
                    <div className="jump2"></div>
                    <div className="jump3"></div>
                    <div className="jump4"></div>
                    <div className="jump5"></div>
                  </div>
                </div>
              </div>

              {
                <div className="message-sender">
                  <div className="typer">
                    <input
                      type="text"
                      placeholder="Enter Your Message Here......"
                      value={message}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                    <div onClick={sendMessage}>Send</div>
                    {/* Or use PiArrowCircleRightFill icon */}
                  </div>
                  <PiArrowCircleRightFill
                    style={{ fontSize: "48px", color: "rgba(38, 215, 218, 1)" }}
                    onClick={sendMessage}
                  />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Chat;
