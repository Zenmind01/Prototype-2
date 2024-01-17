import React, { useEffect, useState } from "react";
import "./community3.css";
import { useNavigate } from "react-router-dom";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/community-w.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/dash-b.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import CommManIconBlack from "../images/CommManIconBlack.png";
import CommDisIconblue from "../images/CommDisIconblue.png";
import Navbar from "../Navbar/navbar";
import axios from "axios";
import Cookies from "js-cookie";

const Community3 = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(Cookies.get("data"));
  }, []);

  const _handleSubmit = async function (e) {
    e.preventDefault();

    // const axios = require("axios");

    let data = JSON.stringify({
      userId: id,
      title: title,
      desc: desc,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://back-zm-01.onrender.com/post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        //console.log(JSON.stringify(response.data));
        navigate("/community2");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "desc") {
      setDesc(value);
    }
  };

  const openLink = () => {
    // Replace 'your-link-here' with the desired URL
    window.open(
      "https://app-chatbot-fxvebwyjixxoh26r8q7s33.streamlit.app/",
      "_blank"
    );
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard-left update-comm-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard2" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Dashboard</div>
            </a>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Session</div>
            </a>

            <a href="/chat" className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <div className="admin-list-dashboard">
              <a href="/community" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Community</div>
              </a>
            </div>

            <div className="comm-sub-option">
              <a href="/community" className="comm-sub-option-1">
                <img src={CommManIconBlack}></img>
                <div className="comm-sub-h">Manage Community</div>
              </a>

              <a href="/community2" className="comm-sub-option-1">
                <img className="comm-sub-img2" src={CommDisIconblue}></img>
                <div className="comm-sub-p">Community Discussion</div>
              </a>
            </div>

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

        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="community3-starter community3-starter1">
              <div className="community3-starter-l">
                <div className="community3-starter-h">
                  Create New Discussion
                </div>
                <div className="community3-starter-p">
                  Community/Community discussion/Create new discussion
                </div>
              </div>
            </div>

            <div className="comm-grp-cat">
              <div className="grp-cat">Group Categories</div>
              <div className="comm-grp-cats comm-grp-cats-2">
                <div className="comm-grp-cats-2-u">
                  <div className="comm-anx">Anxiety</div>
                  <div className="comm-other">Depression</div>
                  <div className="comm-other">Relationship</div>
                </div>
                <div className="comm-grp-cats-2-u">
                  <div className="comm-other">Anger</div>
                  <div className="comm-other">Guilt</div>
                  <div className="comm-other">Sad</div>
                </div>
              </div>
            </div>

            <div className="Create-new-dis-cont Create-new-dis-cont1">
              <div className="new-dis-form">
                <div className="new-topic-form">
                  <div>Topic?</div>
                  <input
                    id="title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing."
                  ></input>
                </div>

                <div className="new-topic-form-l">
                  <div>Describe your Concern</div>
                  <input
                    id="desc"
                    name="desc"
                    value={desc}
                    onChange={handleChange}
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  emporin cididunt ut labore et
 dolore magna aliqua."
                  ></input>
                </div>

                <div className="new-dis-checkbox">
                  <input type="checkbox"></input>
                  <div>Ask Anonymously</div>
                </div>
              </div>
              <div onClick={_handleSubmit} className="dis-btn">
                Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community3;
