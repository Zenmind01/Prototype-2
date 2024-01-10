import React from "react";
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
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";
import PerInfo from "../images/profile-info.png";
import Assess from "../images/profile-assess.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import Navbar from "../Navbar/navbar";

const Dashboard = () => {
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
        <div className="dashboard1-left dashboard1-left-sa">
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
                <img src={PerInfo}></img>
                <div className="comm-sub-h">Personal Information</div>
              </a>

              <a href="/profile-self-assessment" className="comm-sub-option-1">
                <img className="comm-sub-img2" src={Assess}></img>
                <div className="comm-sub-p">Self Assessment</div>
              </a>
            </div>
            <a href="/session" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            <a href="/chat" onClick={openLink} className="admin-list">
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
                <div className="profile-sub-u">Profile/Self Assessment</div>
                <div className="profile-sub-l">Personal Information</div>
              </div>
            </div>
          </div>

          <div className="profile-assessment-banner">
            <div className="assessment-banner">
              <div className="assessment-container">
                <div>
                  <img src={LeftIcon}></img>
                </div>

                <div className="corner-img-set">
                  <img className="corner-img" src={RightIcon}></img>
                  <div className="take-ass">
                    <div className="take-ass-h">
                      Assess yourself with assessment!
                    </div>
                    <div className="take-ass-btn">Take Assessment </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dash-counsellor-banner-mb dash-counsellor-banner-mb-a">
            <img
              className="dash-counsellor-banner-mb-imgl"
              src={LeftCounBanner}
            ></img>
            <div className="dash-counsellor-banner-mb-u">
              <img
                className="dash-counsellor-banner-mb-imgr"
                src={RightCounBanner}
              ></img>
              <div className="dash-counsellor-banner-mb-cont">
                <div className="dash-counsellor-banner-mb-cont-p">
                  Assess Yourself with Assesment
                </div>
                <div className="dash-counsellor-banner-mb-cont-btn">
                  Take Assessment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
