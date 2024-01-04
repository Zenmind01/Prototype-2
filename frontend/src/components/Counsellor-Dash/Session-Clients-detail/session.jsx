import React from "react";
import "./session.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import Counsellor1 from "../images/counsellor1.png";
// import SearchBarIcon from "../images/search.png";
import CommManIconBlack from "../images/CommManIconBlack.png";
import CommDisIconblue from "../images/CommDisIconblue.png";
import slotIcon from "../images/slot.png";
import QualIcon from "../images/qual.png";
import LangIcon from "../images/lang.png";
import MedicalIcon from "../images/medical.png";
import Dob from "../images/dob.png";
import locationIcon from "../images/location.png";
import EmergencyIcon from "../images/emergency.png";
import TreatmentIcon from "../images/treatment.png";
import PrevSessionImg from "../images/prev-session-img.png";
import UpcomingIcon from "../images/upcoming-icon.png";
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
      <div className="dashboard-left csess-dashboard-left-client">
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
              <img src={CommManIconBlack}></img>
              <div className="comm-sub-h">Manage Session</div>
            </a>

            <a href="/session-client-details" className="comm-sub-option-1">
              <img className="comm-sub-img2" src={CommDisIconblue}></img>
              <div className="comm-sub-p">Client Details</div>
            </a>
          </div>

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

      <div className="dashboard-right">
        <div className="dashboard-right-container">
          <div className="client-details-starter">
            <div className="client-details-starter-h">Sessions</div>
            <div className="client-details-starter-p">
              Session/Client Details
            </div>
          </div>
          <div className="user-info-flex">
            <div className="user-info-l">
              <img src={Counsellor1}></img>
              <div className="user-info-box">
                <div className="user-info-box-h">John Doe</div>
                <div className="user-info-box-p">
                  username@gmail.com | +91-9999999999
                </div>
              </div>
            </div>
            <div className="session-btn-flex">
              <div className="session-btn-join">Join</div>
              <div className="session-btn-res">Reschedule</div>
              <div className="session-btn-cl">Cancel</div>
            </div>
          </div>
          <div className="session-more-info">Indian | Male | 25-30 years | Having anxiety and relationship issue for 3 years | English</div>
          <div className="session-clients-booking-flex">
            <div className="session-clients-booking-l">
              <div className="session-clients-booking">
                <img src={slotIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Booked Slot</div>
                    <div className="session-client-booking-box-p">Sep 8, 2023 11:00 PM</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={QualIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Qualification</div>
                    <div className="session-client-booking-box-p">B.Tech</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={LangIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Preferred Language</div>
                    <div className="session-client-booking-box-p">English</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={MedicalIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Medical history</div>
                    <div className="session-client-booking-box-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisi eleifend, pulvinar mi.</div>
                </div>
              </div>
            </div>
            <div className="session-clients-booking-l session-clients-booking-l1">
              <div className="session-clients-booking">
                <img src={Dob}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Date of Birth</div>
                    <div className="session-client-booking-box-p">01, Mar, 1991</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={locationIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">State</div>
                    <div className="session-client-booking-box-p">Rajasthan</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={EmergencyIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Emergency Contact</div>
                    <div className="session-client-booking-box-p">+91-9999999999</div>
                </div>
              </div>
              <div className="session-clients-booking">
                <img src={TreatmentIcon}></img>
                <div className="session-client-booking-box">
                    <div className="session-client-booking-box-h">Any Ongoing Treatment</div>
                    <div className="session-client-booking-box-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nisi eleifend.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="client-report-flex">
            <div className="client-report">Progress Report</div>
            <div className="client-report">Assessment Result</div>
            <div className="client-report">Mood Board</div>
          </div>

          <div className="community-meeting community-meeting-csess">
            <div className="community-meeting-p1">Previous Appointments (3)</div>
            <div className="community-date">
              <div className="community-date-p">01/09/2023 - 30/09/2023</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="upcoming-session-mb upcoming-session-mb-det">
            <div className="upcoming-session-mb-p">Previous Appointments (3)</div>
            <div className="upcoming-session-box-mb-flex"> 
              <div className="upcoming-session-mb-date">01/09 - 30/09</div>
              <img src={CalenderIcon}></img>
            </div>
          </div>

          <div className="prev-session-mb prev-session-mb-det">
            <div className="mb-prev">
              <div className="mb-prev-rl">
                <div className="mb-profile">
                  <img src={MiniProfile}></img>
                  <div className="mb-profile-cont">
                    <div className="mb-profile-cont-u">Counsellor Name</div>
                    <div className="mb-profile-cont-l">Anxiety, Depression</div>
                  </div>
                </div>
                <img src={MbDown}></img>
              </div>
              <div className="mb-more">
                <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                <div className="mb-more-l">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="mb-prev">
              <div className="mb-prev-rl">
                <div className="mb-profile">
                  <img src={MiniProfile}></img>
                  <div className="mb-profile-cont">
                    <div className="mb-profile-cont-u">Counsellor Name</div>
                    <div className="mb-profile-cont-l">Anxiety, Depression</div>
                  </div>
                </div>
                <img src={MbDown}></img>
              </div>
              <div className="mb-more">
                <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                <div className="mb-more-l">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="mb-prev">
              <div className="mb-prev-rl">
                <div className="mb-profile">
                  <img src={MiniProfile}></img>
                  <div className="mb-profile-cont">
                    <div className="mb-profile-cont-u">Counsellor Name</div>
                    <div className="mb-profile-cont-l">Anxiety, Depression</div>
                  </div>
                </div>
                <img src={MbDown}></img>
              </div>
              <div className="mb-more">
                <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                <div className="mb-more-l">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="mb-prev">
              <div className="mb-prev-rl">
                <div className="mb-profile">
                  <img src={MiniProfile}></img>
                  <div className="mb-profile-cont">
                    <div className="mb-profile-cont-u">Counsellor Name</div>
                    <div className="mb-profile-cont-l">Anxiety, Depression</div>
                  </div>
                </div>
                <img src={MbDown}></img>
              </div>
              <div className="mb-more">
                <div className="mb-more-u"> 20 Sep 2023 7:30 - 8:30 PM</div>
                <div className="mb-more-l">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>
          </div>

          <div className="previous-session">
            <div className="prev-session-padding">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>

                <div className="prev-session-options prev-session-options-csess">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="prev-session-padding prev-session-padding-gray">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>

                <div className="prev-session-options prev-session-options-csess">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="prev-session-padding">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>

                <div className="prev-session-options prev-session-options-csess">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="prev-session-padding prev-session-padding-gray">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>

                <div className="prev-session-options prev-session-options-csess">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="prev-session-padding">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>
                <div className="prev-session-options prev-session-options-csess">
                <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            <div className="prev-session-padding prev-session-padding-gray">
              <div className="previos-session-container session-client-cont">
                <div className="prev-session-flex cess-prev-session-flex">
                  <img src={UpcomingIcon}></img>
                  <div className="prev-session-counsellor">
                    <div  className="prev-session-counsellor-name">Community Meeting</div>
                    <div  className="prev-session-counsellor-topic">20 Sep 2023, 7:30 - 8:30 PM</div>
                  </div>
                </div>
                <div className="prev-session-options prev-session-options-csess">
                  <div>Session Notes</div>
                  <div>Session Video</div>
                  <div>Progress Report</div>
                  <div>Assessment Result</div>
                </div>
              </div>
            </div>

            
          </div>

          <div class="view-more-container view-more-container-det">
            <div class="view-more">View More</div>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

export default session;
