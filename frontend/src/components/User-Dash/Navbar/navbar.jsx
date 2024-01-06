import React, { useState } from "react";
import "./navbar.css";
import zenlogo from "../images/ZENMIND.png";
import Notification from "../images/notification.png";
import Signout from "../images/sign-out.png";
import Hamburger from "../images/hamburger.png";
import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import BrainIcon from "../images/brain.png";
import BrainIcon2 from "../images/brain2.png";
import BrainIcon3 from "../images/brain3.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
// import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import CalenderIcon from "../images/calender.png";
import UpcomingIcon from "../images/upcoming-icon.png";
import ZenchatIcon from "../images/zenchat.png";
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import DashIcon from "../images/dashblack.png";
import PerInfo from "../images/profile-info.png";
import CommDisIcon from "../images/comm-dis.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Search from "../images/search-1.png";

const Navbar = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
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
      <div className="nav-container">
        <div className="nav-logo">
          <img className="nav-logo-mb" src={zenlogo} alt="Zenmind Logo" />
        </div>
        <div className="nav-box">
          <div className="nav-search">
            <input
              type="search"
              placeholder="Search"
              className="search-input"
            />
          </div>
          <div className="nav-icons nav-icons-mb">
            <img
              className="noti-img noti-img-mb"
              src={Notification}
              alt="Notification"
            />
            <img className="sign-img" src={Signout}></img>
            <img className="sign-search" src={Search}></img>
            <img className="ham-img" onClick={openPopup} src={Hamburger}></img>
          </div>
        </div>
      </div>
      {isPopupVisible && (
        <Bounce left>
          <div
            onClose={closePopup}
            className="dashboard2-left dashboard2-left-mb dashboard2-left-slide"
          >
            <div className="dashboard-profile">
              <img src={Profile} alt="Profile" />
              <div className="dash-profile-name">Martin Stanton</div>
            </div>

            <div className="admin-options">
              <a href="/dashboard2" className="admin-list">
                <img src={DashIcon} alt="Profile" />
                <div>Dashboard</div>
              </a>
              <a href="profile" className="admin-list">
                <img src={ProfileIcon} alt="Profile" />
                <div>Profile</div>
              </a>
              <a href="/profile-self-assessment" className="admin-list">
                <img className="comm-sub-img2-up" src={PerInfo}></img>
                <div>Self Assessment</div>
              </a>

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
              <a href="/community2" className="admin-list">
                <img src={CommunityIcon}></img>
                <div>Community Discussion</div>
              </a>
              <a className="admin-list">
                <img src={PackageIcon} alt="Package Details" />
                <div>Package Details</div>
              </a>
              <a href="payment-history" className="admin-list">
                <img src={PaymentIcon} alt="Payment History" />
                <div>Payment History</div>
              </a>

              <a href="/add-payment-details" className="admin-list">
                <img src={PaymentIcon}></img>
                <div>Add Payment Details</div>
              </a>
            </div>
          </div>
        </Bounce>
      )}
      {/* onClose={closePopup}  */}
    </>
  );
};

export default Navbar;
