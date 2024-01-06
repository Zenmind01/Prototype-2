import React, { useState } from "react";
import index from "./index.css";
import zenlogo from "../Images/pink_zen 1.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Hambur from "../Images/hamburger.png";
import Home from "../Home/index";
import Signup from "../Registration/SignUp/SignUp";
import Login from "../Registration/Login/Login";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import PerInfo from "../Images/online-business.png";
import DashIcon from "../Images/home.png";
import CommunityIcon from "../Images/add-user.png";
import ProfileIcon from "../Images/group.png";
import SessionIcon from "../Images/contact-us.png";
import ChatbotIcon from "../Images/chat-icon.png";
import Notification from "../Images/user.png";
import Signout from "../Images/sign-out.png";
import Hamburger from "../Images/hamburger.png";
import Profile from "../Images/user-profile.png";
import DashboardIcon from "../Images/dashnboard-icon.png";

function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const navigate = useNavigate();
  const setselected = (event) => {
    const div = document.querySelectorAll(".options");
    div.forEach(function (div) {
      div.classList.remove("fontweight6");
    });
    event.target.classList.add("fontweight6");
  };
  const gohome = () => {
    navigate("/home");
  };
  const gosignup = () => {
    navigate("/Signup");
  };
  const gologin = () => {
    navigate("/login");
  };
  const gotoabout = () => {
    navigate("/about");
  };
  const contact = () => {
    navigate("/contactus");
  };
  const counsellor = () => {
    navigate("/counsellors");
  };

  const openLink = () => {
    // Replace 'your-link-here' with the desired URL
    window.open(
      "https://app-chatbot-fxvebwyjixxoh26r8q7s33.streamlit.app/",
      "_blank"
    );
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setPopupVisible(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <>
      <div className="Navbar">
        <div className="Navbar-content">
          <div className="logo">
            <a href="/home">
              <img src={zenlogo} className="main-logo logo-res logo-res-1" />
            </a>
          </div>
          {/* <Fade top> */}

          <div
            className={
              showMediaIcons ? "nav-options mobile-menu-link" : "nav-options"
            }
          >
            <div onClick={gohome} className="options">
              Home{" "}
            </div>
            <div onClick={gotoabout} className="options">
              About Us
            </div>
            <div onClick={counsellor} className="options options-1">
              Our Counselors
            </div>
            <div onClick={contact} className="options">
              Contact Us{" "}
            </div>

            <div className="auth1" onClick={gosignup}>
              Sign Up{" "}
            </div>
            <div className="auth2" onClick={gologin}>
              Login
            </div>
          </div>
          <div className="hamburger-menu">
            <a href="#">
              {/* <GiHamburgerMenu />  */}
              <img onClick={openPopup} src={Hambur}></img>
            </a>
          </div>
          {/* </Fade> */}
        </div>
      </div>
      {isPopupVisible && (
        <Fade left>
          <div
            onClose={closePopup}
            className="dashboard2-left dashboard2-left-mb dashboard2-left-slide"
          >
            <div className="admin-options-h">
              <a href="/home" className="admin-list">
                <img src={DashIcon} alt="Profile" />
                <div>Home</div>
              </a>
              <a href="/about" className="admin-list">
                <img src={ProfileIcon} alt="Profile" />
                <div>About us</div>
              </a>
              <a href="/counsellors" className="admin-list">
                <img className="comm-sub-img2-up" src={PerInfo}></img>
                <div>Our Counsellor</div>
              </a>

              <a href="/contactus" className="admin-list">
                <img src={SessionIcon} alt="Session" />
                <div>Contact us</div>
              </a>

              <a href="/signup" className="admin-list">
                <img src={CommunityIcon} alt="Community" />
                <div>Sign Up</div>
              </a>
              <a href="/login" className="admin-list">
                <img src={Notification}></img>
                <div>Login</div>
              </a>
            </div>
          </div>
        </Fade>
      )}
    </>
  );
}
export default Navbar;
