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
import MiniProfile from "../images/mb-profile.png";
import MbUp from "../images/mb-up.png";
import MbDown from "../images/mb-down.png";
import RightCounBanner from "../images/counsellor-right-banner.png";
import Filter from "../images/filter.png";
import Navbar from "../Navbar/navbar";

const community = () => {
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
        <div className="dashboard-left">
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

            <a href="/chat" onClick={openLink} className="admin-list">
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
                <img src={CommManIcon}></img>
                <div className="comm-sub-p">Manage Community</div>
              </a>

              <a href="/community2" className="comm-sub-option-1">
                <img className="comm-sub-img2-up" src={CommDisIcon}></img>
                <div className="comm-sub-h">Community Discussion</div>
              </a>
            </div>

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
        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="comm-starter">
              <div className="comm-starter-h">Community</div>
              {/* <div className="comm-starter-p">Session</div> */}
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

            <div className="community-meeting">
              <div className="community-meeting-p1">Your Community Meeting</div>
              <div className="community-date">
                <div className="community-date-p">01/09/2023 - 30/09/2023</div>
                <img src={CalenderIcon}></img>
              </div>
            </div>

            <div className="last-container update-comm">
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
                  <div className="btn-gap">
                    <div className="last-cont-btn-r">Session Notes</div>
                    <div className="last-cont-btn-r">Feedbacks</div>
                  </div>
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
                  <div className="btn-gap">
                    <div className="last-cont-btn-r">Session Notes</div>
                    <div className="last-cont-btn-r">Feedbacks</div>
                  </div>
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
                  <div className="btn-gap">
                    <div className="last-cont-btn-r">Session Notes</div>
                    <div className="last-cont-btn-r">Feedbacks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-prev-comm-msg">
              <div>Previous Community Meetings</div>
              <img src={Filter}></img>
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
                    <div>Feedbacks</div>
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
                    <div>Feedbacks</div>
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
                    <div>Feedbacks</div>
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
                    <div>Feedbacks</div>
                    <div>Session Notes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="recom-heading">Recommended Community Meeting</div>

            <div className="recommended-counsellor update-recomm">
              <div className="mb-prev-comm-msg mb-prev-comm-msg-up">
                <div>Recommended</div>
                <img src={Filter}></img>
              </div>

              <div className="recommended-filter">
                <div className="recommended-filter-cont">
                  <div className="recommended-filter-h">
                    <img className="recomm-cal" src={Minicalender}></img>
                    <div>Select date</div>
                  </div>
                  <div className="recommended-filter-h">
                    <div class="recommended-text">Select a Slot</div>
                    <img src={DownbarIcon}></img>
                  </div>

                  <div class="recommended-filter-h">
                    <div class="recommended-text">Community type</div>
                    <img src={DownbarIcon} alt="Down Icon" />
                  </div>

                  <div className="recommended-filter-h">
                    <div class="recommended-text">language</div>
                    <img src={DownbarIcon}></img>
                  </div>
                </div>

                {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
              </div>
            </div>

            <div className="comm-meet-grid">
              <div class="comm-container grid-item">
                <div className="try">
                  <div className="try-btn">Anxiety</div>
                </div>

                <div class="comm-meet-main">
                  <div className="comm-meet-container">
                    <div className="comm-meet-upper">
                      <div className="comm-meet-info">
                        <div className="comm-meet-info-h1">Community Event</div>
                        <div className="comm-meet-info-h2">Topic</div>
                        <div className="comm-meet-info-h3">
                          20 Sep 2023 10:00 - 11:00 PM
                        </div>
                      </div>
                      <div className="comm-meet-join-box">
                        <div className="comm-meet-joined">
                          <div className="comm-meet-person">
                            <img src={personsIcon}></img>
                          </div>
                          <div className="comm-meet-joined-h">+4</div>
                        </div>
                        <img src={star5Icon}></img>
                      </div>
                    </div>

                    <div className="comm-meet-lower">
                      <div className="comm-meet-lower-h">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod emporin cididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="comm-meet-btn">Join Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comm-container grid-item">
                <div className="try">
                  <div className="try-btn">Anxiety</div>
                </div>
                <div class="comm-meet-main">
                  <div className="comm-meet-container">
                    <div className="comm-meet-upper">
                      <div className="comm-meet-info">
                        <div className="comm-meet-info-h1">Community Event</div>
                        <div className="comm-meet-info-h2">Topic</div>
                        <div className="comm-meet-info-h3">
                          20 Sep 2023 10:00 - 11:00 PM
                        </div>
                      </div>
                      <div className="comm-meet-join-box">
                        <div className="comm-meet-joined">
                          <div className="comm-meet-person">
                            <img src={personsIcon}></img>
                          </div>
                          <div className="comm-meet-joined-h">+4</div>
                        </div>
                        <img src={star5Icon}></img>
                      </div>
                    </div>

                    <div className="comm-meet-lower">
                      <div className="comm-meet-lower-h">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod emporin cididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="comm-meet-btn">Join Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comm-container grid-item">
                <div className="try">
                  <div className="try-btn">Anxiety</div>
                </div>
                <div class="comm-meet-main">
                  <div className="comm-meet-container">
                    <div className="comm-meet-upper">
                      <div className="comm-meet-info">
                        <div className="comm-meet-info-h1">Community Event</div>
                        <div className="comm-meet-info-h2">Topic</div>
                        <div className="comm-meet-info-h3">
                          20 Sep 2023 10:00 - 11:00 PM
                        </div>
                      </div>
                      <div className="comm-meet-join-box">
                        <div className="comm-meet-joined">
                          <div className="comm-meet-person">
                            <img src={personsIcon}></img>
                          </div>
                          <div className="comm-meet-joined-h">+4</div>
                        </div>
                        <img src={star5Icon}></img>
                      </div>
                    </div>

                    <div className="comm-meet-lower">
                      <div className="comm-meet-lower-h">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod emporin cididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="comm-meet-btn">Join Now</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comm-container grid-item">
                <div className="try">
                  <div className="try-btn">Anxiety</div>
                </div>
                <div class="comm-meet-main">
                  <div className="comm-meet-container">
                    <div className="comm-meet-upper">
                      <div className="comm-meet-info">
                        <div className="comm-meet-info-h1">Community Event</div>
                        <div className="comm-meet-info-h2">Topic</div>
                        <div className="comm-meet-info-h3">
                          20 Sep 2023 10:00 - 11:00 PM
                        </div>
                      </div>
                      <div className="comm-meet-join-box">
                        <div className="comm-meet-joined">
                          <div className="comm-meet-person">
                            <img src={personsIcon}></img>
                          </div>
                          <div className="comm-meet-joined-h">+4</div>
                        </div>
                        <img src={star5Icon}></img>
                      </div>
                    </div>

                    <div className="comm-meet-lower">
                      <div className="comm-meet-lower-h">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod emporin cididunt ut labore et dolore
                        magna aliqua.
                      </div>
                      <div className="comm-meet-btn">Join Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default community;
