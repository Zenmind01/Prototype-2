import React from "react";
import "./community.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/community-w.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/dash-b.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import CommManIcon from "../images/comm-man.png";
import CommDisIcon from "../images/comm-dis.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import CalenderIcon from "../images/calender.png";
import UpcomingIcon from "../images/upcoming-icon.png";
import personsIcon from "../images/persons.png";
import star5Icon from "../images/5star.png";
import Navbar from "../Navbar2/navbar";
import MiniProfile from "../images/mb-profile.png";
import MbUp from "../images/mb-up.png";
import MbDown from "../images/mb-down.png";

const community = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard-counsellor" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Dashboard</div>
            </a>
            <a href="/profile-counsellor" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session-counsellor" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Session</div>
            </a>
            <div className="admin-list-dashboard">
              <a href="/counsellor-community" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Community</div>
              </a>
            </div>

            <div className="comm-sub-option">
              <a href="/counsellor-community" className="comm-sub-option-1">
                <img src={CommManIcon}></img>
                <div className="comm-sub-p">Manage Community</div>
              </a>

              <a
                href="/Counsellor-Manage-Community"
                className="comm-sub-option-1"
              >
                <img className="comm-sub-img2-up" src={CommDisIcon}></img>
                <div className="comm-sub-h">Community Discussion</div>
              </a>
            </div>
            <a href="/payment-counsellor" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment</div>
            </a>
          </div>
        </div>
        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="community2-starter community-manage-starter community-manage-starter-mb2">
              <div className="community2-starter-l">
                <div className="community2-starter-h">Community</div>
                <div className="community2-starter-p">
                  Community/Manage Community
                </div>
              </div>
              <a
                href="/counsellor-community-discussion"
                className="comm-start-btn"
              >
                + Create new
              </a>
            </div>

            <div className="upcoming-event">
              <div className="upcoming-event-h">Up coming's events</div>
              <div className="today-box">
                <div className="today-box-h">Today</div>
                <img src={DownbarIcon}></img>
              </div>
            </div>

            <div className="upcoming-session-mb upcoming-session-mb-com">
              <div className="upcoming-session-mb-p">Upcoming events</div>
              <div className="upcoming-session-box-mb-flex">
                <div className="upcoming-session-mb-date upcoming-session-mb-date-1">
                  01/09 - 30/09
                </div>
                <img src={CalenderIcon}></img>
              </div>
            </div>

            <div className="dash-counsellor-flex">
              <div className="dash-counsellor-dash2">
                <div className="dash-counsellor-left">
                  <div className="counsellor-main">
                    <div className="counsellor-details">
                      <img src={Counsellor1}></img>
                      <div className="counsellor-info">
                        <div className="counsellor-name-dash2">
                          Counsellor Name
                        </div>
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
                        <div className="schedule-date-t-dash2">
                          7:30 - 8:30 PM
                        </div>
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
                        <div className="counsellor-name-dash2">
                          Counsellor Name
                        </div>
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
                        <div className="schedule-date-t-dash2">
                          7:30 - 8:30 PM
                        </div>
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

            <div className="session-filter my-comm-search">
              <div className="comm-my-comm-h">My Community</div>
              <div className="session-nav-search">
                <input
                  type="search"
                  placeholder="Search..."
                  className="session-search-input"
                />
                {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
              </div>
            </div>

            <div className="my-comm-meeting-flex">
              <div className="rel-bg">
                <div className="comm-rel-btn">Relationship</div>
              </div>
              <div className="ang-bg">
                <div className="comm-ang-btn">Anger</div>
              </div>
              <div className="guilt-bg">
                <div className="comm-guilt-btn">Guilt</div>
              </div>
            </div>

            <div className="session-filter prev-comm-search">
              <div className="comm-my-comm-h">Previous Community Meeting</div>
              <div className="session-nav-search">
                <input
                  type="search"
                  placeholder="Search..."
                  className="session-search-input"
                />
                {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
              </div>
            </div>

            <div className="prev-session-mb prev-session-mb-comm">
              <div className="mb-prev">
                <div className="mb-prev-rl">
                  <div className="mb-profile">
                    <img src={MiniProfile}></img>
                    <div className="mb-profile-cont">
                      <div className="mb-profile-cont-u">Counsellor Name</div>
                      <div className="mb-profile-cont-l">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <img src={MbDown}></img>
                </div>
                <div className="mb-more">
                  <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                  <div className="mb-more-l">
                    <div>Prescription</div>
                    <div>Session Video</div>
                    <div>Session Notes</div>
                  </div>
                </div>
              </div>

              <div className="mb-prev">
                <div className="mb-prev-rl">
                  <div className="mb-profile">
                    <img src={MiniProfile}></img>
                    <div className="mb-profile-cont">
                      <div className="mb-profile-cont-u">Counsellor Name</div>
                      <div className="mb-profile-cont-l">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <img src={MbDown}></img>
                </div>
                <div className="mb-more">
                  <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                  <div className="mb-more-l">
                    <div>Prescription</div>
                    <div>Session Video</div>
                    <div>Session Notes</div>
                  </div>
                </div>
              </div>

              <div className="mb-prev">
                <div className="mb-prev-rl">
                  <div className="mb-profile">
                    <img src={MiniProfile}></img>
                    <div className="mb-profile-cont">
                      <div className="mb-profile-cont-u">Counsellor Name</div>
                      <div className="mb-profile-cont-l">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <img src={MbDown}></img>
                </div>
                <div className="mb-more">
                  <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                  <div className="mb-more-l">
                    <div>Prescription</div>
                    <div>Session Video</div>
                    <div>Session Notes</div>
                  </div>
                </div>
              </div>

              <div className="mb-prev">
                <div className="mb-prev-rl">
                  <div className="mb-profile">
                    <img src={MiniProfile}></img>
                    <div className="mb-profile-cont">
                      <div className="mb-profile-cont-u">Counsellor Name</div>
                      <div className="mb-profile-cont-l">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <img src={MbDown}></img>
                </div>
                <div className="mb-more">
                  <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                  <div className="mb-more-l">
                    <div>Prescription</div>
                    <div>Session Video</div>
                    <div>Session Notes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="last-container comm-meeting-cont">
              <div className="last-box">
                <div className="community-meeting-flex">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
                <div className="community-meeting-flex gray">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
                <div className="community-meeting-flex">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
                <div className="community-meeting-flex gray">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
                <div className="community-meeting-flex">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
                <div className="community-meeting-flex gray">
                  <div className="community-meeting-info">
                    <img src={UpcomingIcon}></img>
                    <div className="info-content">
                      <div className="community-meeting-h">
                        Community Meeting
                      </div>
                      <div className="community-meeting-p">
                        Anxiety, Depression
                      </div>
                    </div>
                  </div>
                  <div className="community-meeting-time-p1">
                    20 Sep 2023, 7:30 - 8:30 PM
                  </div>
                  <div className="already-join">4+ Members already joined</div>
                  <div className="last-cont-btn-r">Session Notes</div>
                  <div className="last-cont-btn-r">Session Video</div>
                </div>
              </div>
            </div>

            <div className="comm-meeting-vm">View More</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default community;
