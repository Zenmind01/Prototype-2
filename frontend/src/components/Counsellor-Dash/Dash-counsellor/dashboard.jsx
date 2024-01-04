import React from "react";
import "./dashboard.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import GrowthIcon from "../images/growth.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
// import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import CalenderIcon from "../images/calender.png";
import UpcomingIcon from "../images/upcoming-icon.png";
import CommaIcon from "../images/comma.png";
import FourstarIcon from "../images/4star.png";
import Navbar from "../Navbar2/navbar";


const Dashboard = () => {
    return (
      <>
      <Navbar></Navbar>
      <div className="dashboard1-main">
        <div className="dashboard1-left dashboard1-left-cdash">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>
  
          <div className="admin-options">
            <div className="admin-list-dashboard">
              <a href="/dashboard-counsellor" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Dashboard</div>
              </a>
            </div>
            <a href="/profile-counsellor" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session-counsellor" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            
            <a href="/counsellor-community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            
            <a href="/payment-counsellor" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment</div>
            </a>
          </div>
        </div> 
  
        <div className="dashboard1-right dash-right-mb">
          <div className="dashboard1-right-container">
              <div className="cdash-starter">
                Welcome, Erin!
              </div>

              <div className="cdash-progress">Progress</div>

              <div className="cdash-card-flex">
                <div className="cdash-card-1">
                  <div className="cdash-card-cont">
                    <div className="cdash-card-h">Total Income</div>
                    <div className="cdash-card-p">45k</div>
                  </div>
                  <div className="cdash-right-s">
                    <div className="cdash-card-ana">+20%</div>
                    <img src={GrowthIcon}></img>
                  </div> 
                  
                </div>
                <div className="cdash-card-2">
                  <div className="cdash-card-cont">
                    <div className="cdash-card-h">Total Sessions</div>
                    <div className="cdash-card-p">1000</div>
                  </div>
                  <div className="cdash-right-s">
                    <div className="cdash-card-ana">+20%</div>
                    <img src={GrowthIcon}></img>
                  </div> 
                  
                </div>
                <div className="cdash-card-3">
                  <div className="cdash-card-cont">
                    <div className="cdash-card-h">New Sessions</div>
                    <div className="cdash-card-p">1000</div>
                  </div>
                  <div className="cdash-right-s">
                    <div className="cdash-card-ana">+20%</div>
                    <img src={GrowthIcon}></img>
                  </div> 
                  
                </div>
                <div className="cdash-card-4">
                  <div className="cdash-card-cont">
                    <div className="cdash-card-h">Community Event</div>
                    <div className="cdash-card-p">1000</div>
                  </div>
                  <div className="cdash-right-s">
                    <div className="cdash-card-ana">+20%</div>
                    <img src={GrowthIcon}></img>
                  </div> 
                  
                </div>
              </div>

              <div className="upcoming-events dash2-up-ev">
            <div className="upcoming-event-p">Up coming's events</div>
            <div className="upcoming-time">
              <div className="today-p">Today</div>
              <img src={DownbarIcon}></img>
            </div>
          </div>


          <div className="dash-counsellor-flex">
            <div className="dash-counsellor-dash2">
              <div className="dash-counsellor-left">
                <div className="counsellor-main">
                  <div className="counsellor-details">
                    <img src={Counsellor1}></img>
                    <div className="counsellor-info">
                      <div className="counsellor-name-dash2">Counsellor Name</div>
                      <div className="anx-dp-dash2">Anxiety, Depression</div>
                    </div>
                  </div>
                  <div className="counsellor-schedule">
                    <div className="schedule-date">
                      <img src={Minicalender}></img>
                      <div className="schedule-date-t-dash2">20 Sep 2023</div>
                    </div>
                    <div className="schedule-date">
                      <img src={timeIcon}></img>
                      <div className="schedule-date-t-dash2">7:30 - 8:30 PM</div>
                    </div>
                  </div>
                </div>

                <div className="schedule-cancel-dash2">
                  <img src={CancelIcon}></img>
                  <div>Cancel the session</div>
                </div>
              </div>

              <div className="join-reschedule-dash2">
                <div className="join-btn-dash2">Join Now</div>
                <div className="reschedule-dash2">Reschedule</div>
                <div className="cancel-dash">Cancel</div>
              </div>
            </div>

            <div className="dash-counsellor-dash2">
              <div className="dash-counsellor-left">
                <div className="counsellor-main">
                  <div className="counsellor-details">
                    <img src={Counsellor2}></img>
                    <div className="counsellor-info">
                      <div className="counsellor-name-dash2">Counsellor Name</div>
                      <div className="anx-dp-dash2">Anxiety, Depression</div>
                    </div>
                  </div>
                  <div className="counsellor-schedule">
                    <div className="schedule-date">
                      <img src={Minicalender}></img>
                      <div className="schedule-date-t-dash2">20 Sep 2023</div>
                    </div>
                    <div className="schedule-date">
                      <img src={timeIcon}></img>
                      <div className="schedule-date-t-dash2">7:30 - 8:30 PM</div>
                    </div>
                  </div>
                </div>

                <div className="schedule-cancel-dash2">
                  <img src={CancelIcon}></img>
                  <div>Cancel the session</div>
                </div>
              </div>

              <div className="join-reschedule-dash2">
                <div className="join-btn-dash2">Join Now</div>
                <div className="reschedule-dash2">Reschedule</div>
                <div className="cancel-dash">Cancel</div>
              </div>
            </div>
          </div>

          <div className="community-meeting community-meeting-cdash">
            <div className="community-meeting-p1">Upcoming Sessions</div>
            <div className="community-date">
              <div className="community-date-p">01/09/2023 - 30/09/2023</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="last-container last-container-cdash">
            <div className="last-box">
              <div className="community-meeting-flex community-meeting-flex-cdash">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Client name</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex community-meeting-flex-cdash gray">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Client name</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex community-meeting-flex-cdash">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Client name</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex community-meeting-flex-cdash gray">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Client name</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
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

          <div className="upcoming-left-dash2 upcoming-left-dash2-cli">
              <div className="upcoming-left-container">
                <div className="left-content-2">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1">Client name</div>
                      <div className="client-desc">Anxiety, Depression</div>
                      <div className="client-desc">
                        20 Sep 2023, 7:30 - 8:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="client-flex">
                    <div className="client-btn">Join</div>
                    <div className="client-reschedule">Reschedule</div>
                  </div>
                </div>
                <div className="left-content-1">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1">Client name</div>
                      <div className="client-desc">Anxiety, Depression</div>
                      <div className="client-desc">
                        20 Sep 2023, 7:30 - 8:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="client-flex">
                    <div className="client-btn">Join</div>
                    <div className="client-reschedule">Reschedule</div>
                  </div>
                </div>
                <div className="left-content">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1">Client name</div>
                      <div className="client-desc">Anxiety, Depression</div>
                      <div className="client-desc">
                        20 Sep 2023, 7:30 - 8:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="client-flex">
                    <div className="client-btn">Join</div>
                    <div className="client-reschedule">Reschedule</div>
                  </div>
                </div>
                <div className="left-content-1">
                  <div className="upcoming-container">
                    <img src={UpcomingIcon}></img>
                    <div className="client-info">
                      <div className="client-name-h1">Client name</div>
                      <div className="client-desc">Anxiety, Depression</div>
                      <div className="client-desc">
                        20 Sep 2023, 7:30 - 8:30 PM
                      </div>
                    </div>
                  </div>
                  <div className="client-flex">
                    <div className="client-btn">Join</div>
                    <div className="client-reschedule">Reschedule</div>
                  </div>
                </div>
              </div>
            </div>

          
          <div className="upcoming-session-mb upcoming-session-mb-d">
            <div className="upcoming-session-mb-p">Your Community Meeting</div>
            <div className="upcoming-session-box-mb-flex"> 
              <div className="upcoming-session-mb-date">01/09 - 30/09</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="community-meeting community-meeting-cdash community-meeting-cpdash">
            <div className="community-meeting-p1">Your Community Meeting</div>
            <div className="community-date">
              <div className="community-date-p">01/09/2023 - 30/09/2023</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="last-container last-container-u">
            <div className="last-box">
              <div className="community-meeting-flex">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                    <div className="res-time-schedule">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex gray">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                    <div className="res-time-schedule">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                    <div className="res-time-schedule">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
            </div>
          </div>


          <div className="last-container last-container-cdash">
            <div className="last-box">
              <div className="community-meeting-flex community-meeting-flex-cdashs">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex gray community-meeting-flex-cdashs">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex community-meeting-flex-cdashs">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
              <div className="community-meeting-flex gray community-meeting-flex-cdashs">
                <div className="community-meeting-info">
                  <img src={UpcomingIcon}></img>
                  <div className="info-content">
                    <div className="community-meeting-h">Community Meeting</div>
                    <div className="community-meeting-p">
                      Anxiety, Depression
                    </div>
                  </div>
                </div>
                <div className="community-meeting-time-p1">
                  20 Sep 2023, 7:30 - 8:30 PM
                </div>
                <div className="already-join">4+ Members already joined</div>
                <div className="btn-gap">
                  <div className="last-cont-btn">Join</div>
                  <div className="last-cont-btn-r">Reschedule</div>
                  <div className="last-cont-btn-r">Cancel</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cdash-review-h">Reviews</div>
          <div className="cdash-review-flex">
            <div className="cdash-review-card">
              <div className="cdash-review-card-u">
                <img src={CommaIcon}></img>
                <div>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.piscing elit, sed do eiusmod tempor incididuntdg ut labore et dolore magna aliqua.</div>
              </div>
              <div className="cdash-review-card-l">
                <div>User Name, Mumbai</div>
                <img src={FourstarIcon}></img>
              </div>
            </div>
            <div className="cdash-review-card">
              <div className="cdash-review-card-u">
                <img src={CommaIcon}></img>
                <div>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.piscing elit, sed do eiusmod tempor incididuntdg ut labore et dolore magna aliqua.</div>
              </div>
              <div className="cdash-review-card-l">
                <div>User Name, Mumbai</div>
                <img src={FourstarIcon}></img>
              </div>
            </div>
            <div className="cdash-review-card">
              <div className="cdash-review-card-u">
                <img src={CommaIcon}></img>
                <div>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.piscing elit, sed do eiusmod tempor incididuntdg ut labore et dolore magna aliqua.</div>
              </div>
              <div className="cdash-review-card-l">
                <div>User Name, Mumbai</div>
                <img src={FourstarIcon}></img>
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
