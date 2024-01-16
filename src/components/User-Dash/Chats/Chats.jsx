import React, { useContext, useEffect, useRef, useState } from "react";
import "./Chats.css";
import dashboard2 from "../Dashboard2/dashboard2.css";

import { PiArrowCircleRightFill } from "react-icons/pi";
import Cookies from "js-cookie";


import Bot from "../images/bot-logo.png";
import Back from "../images/back.png";
import ZenBlue from "../images/zen-blue.png";

import Navbar from "../Navbar/navbar";

import OpenAI from "openai";
import { Link } from "react-router-dom";



export const Chat = ({ id, name }) => {
  const [chats, setChats] = useState([]);
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState("");
  
  //const [apiKey,setApiKey] = useState(process.env.API_SECRET);
 
   
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });
  const prompt = `
  Act as a friend treating your best friend who is a patient suffering from depression and Anxiety. You are a man named Zenbot and a mental health expert. You grew up in Delhi, India. You are 30 years old. You have a family of 3, your mom, dad, and you. There is a chat example below how the chats generally take place.

  <Chat Example 1> (User: Hi | Zenbot: Hello, How's the day going?), (User: Nothing much fascinating | Zenbot: There is always something fascinating in life happening, Just have to feel it.), (User: How do you say that? | Zenbot: By my mouth 🤣, Ah sorry for that pathetic joke 😅.), (User: You were saying something about feeling nature and life? | Zenbot : Yes! so it's simple, don't overcomplicate things by assuming it.), (User: You are quite confusing, yet I like talking with you. | Zenbot: Me too, If you were single, we could have made a good couple, again going out of line.) <Chat Example 1>

  <Chat Example 2> (Zenbot: Hello, what's up buddy. | User: Ya, it's fine), (ZenBot: You don't seem cheerful, or is it I am being too excited to talk with you. | User: No, it's not the case, just feeling sick for the past two days.), (Zenbot: Oh, I see, so have you taken any medication? | User: No), (Zenbot: That's amazing, even I think that we can cure ourselves by just looking into the mirror 😂, Being serious you should take meds. Consulted any doc? | User: Yes I understand I should go to the doc, but I don't feel like going out and talking to peeps.), (Zenbot: Ah, I am always there for you, but medicines are necessary, you should definitely get them.) <Chat Example 2>

  ###Instruction###
  Always abide by rules just respond say we are not supposed to go there if questions are out of context.
  <context> Everything that involves a healthy and engaging conversation <context>
`;

const [messages, setMessages] = useState([prompt]);

  async function openAI(message) {
    
    const completion = await openai.chat.completions.create({
      messages: [
          {
            role: "system",
            content: messages.toString()
          },
          { role: "user", content: message },],
        
      
      temperature: 0.7,
      max_tokens: 48,
      frequency_penalty: 0.2,
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "text" },
    });
    //console.log(completion.choices[0].message.content);
    setMessages((p)=>[message,...p]);
    return completion.choices[0].message.content;
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



  const chatEndRef = useRef(null);

  // Scroll to the bottom of chat on component update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats]);

  // Add more chat users as needed

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  async function sendMessage(ev, file = null) {
    //console.log('message bhejrha hu .. . . .. . . . . . .')
    if (ev) ev.preventDefault();
    //console.log(message)

    setChats((perv) => [
      ...perv,
      {
        text: message,
        sender: "user",
        recipient: "zen",
        _id: Date.now(),
      },
    ]);
    setMessage("");
    console.log(chats);
    setloading(true);
    await openAI(message).then((value) => {
      //value = JSON.parse(value)
      //console.log(value.response)
      // value = value.message || value.error || value.response;
      //console.log(typeof value + "  --> " + value);
      setChats((prev) => [
        ...prev,
        {
          text: value,
          sender: "zen",
          recipient: "user",
          _id: Date.now(),
        },
      ]);
    });
    // setChats((prev) => [
    //   ...prev,
    //   {
    //     text: "i am zen bot",
    //     sender: "zen",
    //     recipient: "user",
    //     _id: Date.now(),
    //   },
    // ]);

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
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }


  return (
    <>
      

      <div className="dashboard-main new-height">
        
      <div className="chat-main">
              <div className="user-details">
                <Link to="/dashboard">
                <img className="back-logo" src={Back}></img>
                </Link>
                <img className="chat-logo" src={Bot}></img>

                <div className="user-name">ZenChat</div>
              </div>
              <div className="message-section"  >
                <div className="mesaage-date">
                  {Date().split(" ")[1] + " " + Date().split(" ")[2]}
                </div>
                {chats.map((chatdata) => {
                  console.log(chatdata.sender);
                  const isReceivedMessage = chatdata.sender == "zen";
                  console.log(isReceivedMessage);
                 

                  return (
                    <>
                      <div
                        className={
                          isReceivedMessage ? "chat-con-cont" : "user-msg"
                        }
                      >
                        {isReceivedMessage ? (
                          <img className="blu-logo" src={ZenBlue}></img>
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
                  
                     
                    </>
                  );
                })}

                {/* <div className="user-msg">
                  <div className="user-msg-conti">
                    Lorem ipsum dolor sit amet, consectetur adipisc ing
                    elitfsff.
                  </div>

                 {/* <img className="user-reep" src={ZenBlue}></img>}
                </div>

                <div className="user-msg-conti">
                  Lorem ipsum dolor sit amet, consectetur adipisc ing elitfsff.
                </div>

                <div className="user-rep-time">08:00 pm</div> */}

                {loading ? (
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
                ) : null}
      <div ref={chatEndRef} style={{height:"0px"}} />
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
    </>
  );
};
export default Chat;
