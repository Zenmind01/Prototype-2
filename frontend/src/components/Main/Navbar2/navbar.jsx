import React, { useState } from "react";
import "./navbar.css";
import zenlogo from "../Images/ZENMIND.png";
import Notification from "../Images/notification.png";
import Signout from "../Images/sign-out.png";
import Hamburger from "../Images/hamburger.png";
import Profile from "../Images/user-profile.png";
import DashboardIcon from "../Images/dashnboard-icon.png";
import ProfileIcon from "../Images/profile-icon.png";
import SessionIcon from "../Images/session-icon.png";
import ChatbotIcon from "../Images/chat-icon.png";
import CommunityIcon from "../Images/community-icon.png";
import PackageIcon from "../Images/package-icon.png";
import PaymentIcon from "../Images/payment-icon.png";
import BrainIcon from "../Images/brain.png";
import BrainIcon2 from "../Images/brain2.png";
import BrainIcon3 from "../Images/brain3.png";
import DownbarIcon from "../Images/downbar.png";
import Counsellor1 from "../Images/counsellor1.png";
import Counsellor2 from "../Images/counsellor2.png";
// import Counsellor2 from "../Images/counsellor2.png";
import timeIcon from "../Images/time.png";
import Minicalender from "../Images/minicalender.png";
import CancelIcon from "../Images/cancel.png";
import CalenderIcon from "../Images/calender.png";
import UpcomingIcon from "../Images/upcoming-icon.png";
import ZenchatIcon from "../Images/zenchat.png";
import LeftIcon from "../Images/left-b-img.png";
import RightIcon from "../Images/right-b-img.png";
import RightCounBanner from "../Images/counsellor-right-banner.png";
import LeftCounBanner from "../Images/counsellor-left-banner.png";
import DashIcon from "../Images/dashblack.png";
import PerInfo from "../Images/profile-info.png";
import CommDisIcon from "../Images/comm-dis.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
// import Search from "../Images/search-1.png";

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
            <img className="sign-search" src=""></img>
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
                <img src={CommunityIcon}></img>
                <div>Login</div>
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
