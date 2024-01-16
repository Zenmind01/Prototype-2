import React from "react";
import "./session.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/session-w.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/dash-b.png";
import CommunityIcon from "../images/community-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import DownbarIcon from "../images/downbar.png";
import Counsellor1 from "../images/counsellor1.png";
import Counsellor2 from "../images/counsellor2.png";
import timeIcon from "../images/time.png";
import Minicalender from "../images/minicalender.png";
import CancelIcon from "../images/cancel.png";
import CommManIcon from "../images/comm-man.png";
import CommDisIcon from "../images/comm-dis.png";
// import SearchBarIcon from "../images/search.png";
import PrevSessionImg from "../images/prev-session-img.png";
import CalenderIcon from "../images/calender.png";
import Navbar from "../Navbar2/navbar";
import MiniProfile from "../images/mb-profile.png";
import MbUp from "../images/mb-up.png";
import MbDown from "../images/mb-down.png";

const session = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard-left csess-dashboard-left">
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

            <div className="admin-list-dashboard">
              <a href="/session-counsellor" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Session</div>
              </a>
            </div>

            <div className="comm-sub-option">
              <a href="/session-counsellor" className="comm-sub-option-1">
                <img src={CommManIcon}></img>
                <div className="comm-sub-p">Manage Session</div>
              </a>

              <a href="/session-client-details" className="comm-sub-option-1">
                <img className="comm-sub-img2-up" src={CommDisIcon}></img>
                <div className="comm-sub-h">Client Details</div>
              </a>
            </div>

            <a href="/counsellor-community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>

            <a className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment</div>
            </a>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="session-starter">
              <div className="session-starter-h">Session Details</div>
              <div className="session-starter-p">Session</div>
            </div>

            <div className="upcoming-session-mb">
              <div className="upcoming-session-mb-p">Upcoming Events</div>
              <div className="upcoming-session-box-mb-flex">
                <div className="upcoming-session-mb-date">01/09 - 30/09</div>
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
                        <div className="counsellor-name-dash2">Client Name</div>
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
                        <div className="counsellor-name-dash2">Client Name</div>
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

            <div className="prev-session csess-prev-session">
              Previous Sessions
            </div>

            <div className="session-filter">
              <div className="session-filter-date">
                <div className="session-filter-dates">
                  <div>Select date</div>
                  <img src={Minicalender}></img>
                </div>
                <div className="session-filter-dates">
                  <div>Select a slot</div>
                  <img src={DownbarIcon}></img>
                </div>
              </div>
              <div className="session-nav-search">
                <input
                  type="search"
                  placeholder="Search by name..."
                  className="session-search-input"
                />
                {/* <img className="session-search-img" src={SearchBarIcon}></img> */}
              </div>
            </div>

            <div className="previous-session">
              <div className="prev-session-padding">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding prev-session-padding-gray">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding prev-session-padding-gray">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding prev-session-padding-gray">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>

              <div className="prev-session-padding prev-session-padding-gray">
                <div className="previos-session-container">
                  <div className="prev-session-flex">
                    <img src={PrevSessionImg}></img>
                    <div className="prev-session-counsellor">
                      <div className="prev-session-counsellor-name">
                        Client Name
                      </div>
                      <div className="prev-session-counsellor-topic">Topic</div>
                    </div>
                  </div>

                  <div className="prev-session-time">
                    20 Sep 2023 7:30 - 8:30 PM
                  </div>

                  <div className="prev-session-options">
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prev-session-mb prev-session-mb-sc">
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
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
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
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
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
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
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
                    <div>
                      <a
                        href="https://drive.google.com/file/d/1u_qpFU3QbYKApv3zEp30yUBJf-vwCsaZ/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Feedbacks
                      </a>
                    </div>
                    <div>Report</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="view-more-container">
              <div class="view-more">View More</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default session;