import React from "react";
import "./dashboard.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import UpcomingIcon from "../images/upcoming-icon.png";
import RightPhoto from "../images/right-photo.png";
import LeftIcon from "../images/left-b-img.png";
import RightIcon from "../images/right-b-img.png";
import CalenderIcon from "../images/calender.png";
import DownbarIcon from "../images/downbar.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import LeftCounBanner from "../images/counsellor-left-banner.png";
import ChatLeft from "../images/chat-left.png";
import ChatMid from "../images/chat-mid.png";

const Dashboard = () => {
  return (
    <div className="dashboard1-main">
      <div className="dashboard1-left">
        <div className="dashboard-profile">
          <img src={Profile} alt="Profile" />
          <div className="dash-profile-name">Martin Stanton</div>
        </div>

        <div className="admin-options">
          <div className="admin-list-dashboard">
            <a href="/dashboard" className="admin-list-cont">
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
          <a className="admin-list">
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
        <div className="dashboard1-right-container">
          <div className="dashboard1-right-starter">
            <div className="dashboard1-right-starter-h1">Good Morning, John doe</div>
            <div className="dashboard1-right-starter-p">Monday, 20 Sep 2023</div>
          </div>
 
          <div className="upcoming-events upcoming-events-mb">
            <div className="upcoming-event-p">Up coming's events</div>
            <div className="upcoming-time">
              <div className="today-p">Today</div>
              <img src={DownbarIcon}></img>
            </div>
          </div>

          <div className="dash-counsellor-banner">
            <div className="counsellor-banner-left">
               <img src={LeftCounBanner}></img>
               <div className="counsellor-banner-cont">
              <div className="counsellor-banner-cont-h">No upcoming event yet!</div>
              <a className="counsellor-banner-btn">Get Matched with you Counsellor</a>
            </div>
            </div>
            <img className="counsellor-banner-right" src={RightCounBanner}></img>
          </div>

          <div className="dash-counsellor-banner-mb">
            <img className="dash-counsellor-banner-mb-imgl" src={LeftCounBanner}></img>
            <div className="dash-counsellor-banner-mb-u">
              <img  className="dash-counsellor-banner-mb-imgr" src={RightCounBanner}></img>
              <div className="dash-counsellor-banner-mb-cont">
                <div className="dash-counsellor-banner-mb-cont-p">No Upcoming event yet!</div>
                <div className="dash-counsellor-banner-mb-cont-btn">Get Matched with your Counsellor</div>
              </div>
            </div>
          </div>

          
          <div className="upcoming-session-mb">
            <div className="upcoming-session-mb-p">Upcoming Sessions</div>
            <div className="upcoming-session-box-mb-flex"> 
              <div className="upcoming-session-mb-date">01/09 - 30/09</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>
            

          <div className="upcoming-session-dash">
            <div className="upcoming-session-1">
              <div className="upcoming-session-box">
                <div className="upcoming-session-p">Upcoming Sessions</div>
                <div className="upcoming-session-box-flex"> 
                  <div className="upcoming-session-date">01/09/2023 - 30/09/2023</div>
                  <img src={CalenderIcon}></img>
                </div>
              </div>
            </div>
            <div className="upcoming-session-1">
              <div className="upcoming-session-box">
                <div className="upcoming-session-p">Upcoming Sessions</div>
                <div className="upcoming-session-box-flex">
                  <div className="upcoming-session-date">01/09/2023 - 30/09/2023</div>
                  <img src={CalenderIcon}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="client-mid-container-dash">
            <div className="upcoming-left-dash">
              <div className="upcoming-left-container-dash">
                <div className="left-content-2-dash">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1-dash">Client name</div>
                      <div className="client-desc-dash">Anxiety, Depression</div>
                      <div className="client-desc-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
                    </div>
                  </div>
                  <div className="client-btn-dash">Book</div>
                </div>
                <div className="left-content-1-dash">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1-dash">Client name</div>
                      <div className="client-desc-dash">Anxiety, Depression</div>
                      <div className="client-desc-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
                    </div>
                  </div>
                  <div className="client-btn-dash">Book</div>
                </div>
                <div className="left-content-dash">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1-dash">Client name</div>
                      <div className="client-desc-dash">Anxiety, Depression</div>
                      <div className="client-desc-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
                    </div>
                  </div>
                  <div className="client-btn-dash">Book</div>
                </div>
                <div className="left-content-1-dash">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1-dash">Client name</div>
                      <div className="client-desc-dash">Anxiety, Depression</div>
                      <div className="client-desc-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
                    </div>
                  </div>
                  <div className="client-btn-dash">Book</div>
                </div>
              </div>
            </div>

            
              <img className="right-mid-photo" src={RightPhoto}></img>
            
          </div>

          <div className="upcoming-session-mb chat-session-mb">
            <div className="upcoming-session-mb-p">Chatbot</div>
            <div className="upcoming-session-box-mb-flex"> 
              <div className="upcoming-session-mb-date">01/09 - 30/09</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="user-chat-res-mid">
            <img src={ChatLeft}></img>
            <div className="user-chat-m">
              <img src={ChatMid}></img>
              <div className="user-chat-m-btn">Start Conversation</div>
            </div>
          </div>

          <div className="assessment-banner">
              <div className="assessment-container">
                  <div>
                    <img src={LeftIcon}></img>
                  </div>

                  <div className="corner-img-set">
                    <img className="corner-img" src={RightIcon}></img>
                    <div className="take-ass">
                      <div className="take-ass-h">Assess yourself with assessment!</div>
                      <div className="take-ass-btn">Take Assessment </div>
                    </div>
                  </div>
              </div>
          </div>

          <div className="community-meeting-1">
            <div className="community-meeting-p1">Your Community Meeting</div>
            <div className="community-date">
              <div className="community-date-p">01/09/2023 - 30/09/2023</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="upcoming-session-mb">
            <div className="upcoming-session-mb-p">Upcoming Sessions</div>
            <div className="upcoming-session-box-mb-flex"> 
              <div className="upcoming-session-mb-date">01/09 - 30/09</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="last-container-dash">
            <div className="last-box-dash">
            <div className="community-meeting-flex-dash">
              <div className="community-meeting-info-dash">
                <img src={UpcomingIcon}></img>
                <div className="info-content">
                  <div className="community-meeting-h-dash">Community Meeting</div>
                  <div className="community-meeting-p-dash">Anxiety, Depression</div>
                </div>
              </div>
              <div className="community-meeting-time-p1-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
              <div className="already-join-dash">4+ Members already joined</div>
              <div className="btn-gap-dash">
                 <div className="last-cont-btn-dash">Join</div>
              </div>
              
            </div>
            <div className="community-meeting-flex-dash gray-dash">
              <div className="community-meeting-info-dash">
                <img src={UpcomingIcon}></img>
                <div className="info-content">
                  <div className="community-meeting-h-dash">Community Meeting</div>
                  <div className="community-meeting-p-dash">Anxiety, Depression</div>
                </div>
              </div>
              <div className="community-meeting-time-p1-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
              <div className="already-join-dash">4+ Members already joined</div>
              <div className="btn-gap-dash">
                 <div className="last-cont-btn-dash">Join</div>
              </div>
            </div>
            <div className="community-meeting-flex-dash">
              <div className="community-meeting-info-dash">
                <img src={UpcomingIcon}></img>
                <div className="info-content">
                  <div className="community-meeting-h-dash">Community Meeting</div>
                  <div className="community-meeting-p-dash">Anxiety, Depression</div>
                </div>
              </div>
              <div className="community-meeting-time-p1-dash">20 Sep 2023, 7:30 - 8:30 PM</div>
              <div className="already-join-dash">4+ Members already joined</div>
              <div className="btn-gap-dash">
                 <div className="last-cont-btn-dash">Join</div>
              </div> 
            </div>
            </div>
          </div>
          <div className="dash-counsellor-banner-mb">
            <img className="dash-counsellor-banner-mb-imgl" src={LeftCounBanner}></img>
            <div className="dash-counsellor-banner-mb-u">
              <img  className="dash-counsellor-banner-mb-imgr" src={RightCounBanner}></img>
              <div className="dash-counsellor-banner-mb-cont">
                <div className="dash-counsellor-banner-mb-cont-p">Assess Yourself with Assesment</div>
                <div className="dash-counsellor-banner-mb-cont-btn">Take Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
