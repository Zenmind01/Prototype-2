import React, { useEffect, useState } from "react";
import "./profile.css";

import Profile from "../images/user-profile.png";
import ProfileImg from "../images/profile-img.png";
import Camera from "../images/camera.png";
import DashboardIcon from "../images/profile-w.png";
import ProfileIcon from "../images/dash-b.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import Cross from "../images/cross.png";
import Downbar from "../images/downbar.png";
import PerInfo from "../images/profile-info.png";
import Assess from "../images/profile-assess.png";
import Navbar from "../Navbar/navbar";
import axios from "axios";

const Dashboard = () => {
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {}, []);
  const _handleSubmit = async function (e) {
    e.preventDefault();

    // const axios = require("axios");

    let data = JSON.stringify({
      phone: phone,
      dob: dob,
      gender: gender,
      p1: [],
      p2: [],
      p3: [],
      p4: [],
      p5: [],
      p6: [],
      bankDetail: {
        bank_name: "",
        ac_no: "",
        ifsc_code: "",
        branch_name: "",
        upi: "",
        card_no: "",
      },
    });

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://localhost:2626/users/658fedac8d4ee0484d4a37e7",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "phone") {
      setPhone(value);
    } else if (name === "dob") {
      setDob(value);
    } else if (name === "gender") {
      setGender(value);
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
      <div className="dashboard1-main">
        <div className="dashboard1-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard2" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Dashboard</div>
            </a>
            <div className="admin-list-dashboard">
              <a href="/profile" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Profile</div>
              </a>
            </div>

            <div className="comm-sub-option">
              <a href="/profile" className="comm-sub-option-1">
                <img src={Assess}></img>
                <div className="comm-sub-p">Personal Information</div>
              </a>

              <a href="/profile-self-assessment" className="comm-sub-option-1">
                <img className="comm-sub-img2-up" src={PerInfo}></img>
                <div className="comm-sub-h">Self Assessment</div>
              </a>
            </div>
            <a href="/session" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            <a onClick={openLink} className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <a href="/community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            <div className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </div>
            <a href="/payment-history" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment History</div>
            </a>
          </div>
        </div>

        <div className="dashboard1-right dash-right-mb">
          <div className="profile-container">
            <div className="profile-starter">
              <div className="profile-starter-h">Profile</div>
            </div>

            <div className="profile-subtopic-cont">
              <div className="profile-subtopic-cont-left">
                <div className="profile-sub-u">Subtopic</div>
                <div className="profile-sub-l">Personal Information</div>
              </div>

              <div className="profile-img-merge">
                <img src={ProfileImg} className="profile-subtopic-img1"></img>
                <img src={Camera} className="profile-subtopic-img2"></img>
              </div>
            </div>
          </div>

          <div className="profile-form" onSubmit={_handleSubmit}>
            <div className="profile-form-cont">
              <div className="profile-form-info">
                <label for="fname">
                  Full name<span>*</span>
                </label>
                <input type="name" placeholder="John Doe"></input>
              </div>

              <div className="profile-form-info profile-form-info-mb">
                <label for="email">
                  Email<span>*</span>
                </label>
                <input type="email" placeholder="name@domain.com"></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-mb profile-form-info-mb-mob">
                <label for="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  type="text"
                  placeholder="+91 9500950095"
                ></input>
              </div>

              <div className="profile-form-info profile-form-info-mb-dob">
                <label for="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                  placeholder="20/September/2000"
                ></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-mb-gen">
                <label for="choices">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                  <option value="option3">Prefer Not to Say</option>
                </select>
              </div>
            </div>
          </div>

          <div className="profile-ques-cont">
            <div className="profile-ques">
              <div className="profile-ques-content profile-ques-content-up">
                What are you seeking help for?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  Depression <img src={Cross}></img>
                </div>
                <div className="profile-ques-box">
                  Stress <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>

            <div className="profile-ques">
              <div className="profile-ques-content">
                How long you have been experiencing these issues?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  1-2 months <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>

            <div className="profile-ques">
              <div className="profile-ques-content">
                How difficult it is to manage these concern?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  Somewhat difficult <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>

            <div className="profile-ques">
              <div className="profile-ques-content">
                Do you speak any Language ? If yes, please select the language
                and you proficiency level?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  Hindi <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>

            <div className="profile-ques">
              <div className="profile-ques-content">
                What is your preferred medium for the session?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  Video <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>

            <div className="profile-ques">
              <div className="profile-ques-content">
                When do you want to schedule your first session?
              </div>
              <div className="profile-ques-input">
                <div className="profile-ques-box">
                  Right away <img src={Cross}></img>
                </div>
              </div>
              <img src={Downbar} className="downbar-img"></img>
            </div>
          </div>

          <div
            onClick={_handleSubmit}
            className="profile-save-btn profile-save-btn-mb"
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
