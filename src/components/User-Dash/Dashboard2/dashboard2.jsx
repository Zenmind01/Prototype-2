import React, {useEffect, useState} from "react";
import "./dashboard2.css";

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
import Navbar from "../Navbar/navbar";
import session from "../Session/session";
import axios from "axios";

const Dashboard2 = ({data}) => {

  const [sessions, getSessions] = useState(data[0);
  const [clist,setClist] = useState([]);
  

  useEffect(() => {

    const getClist = async ()=>{
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://back-zm-01.onrender.com/doc/',
        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
       // console.log(response.data.data)
        setClist(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
    }

    getClist();
    
  }, [])

  const name = (id)=>{
    const n = clist.find(item=>item._id===id)
    console.log(n)
    if(!n) return "unkown";
    return n.name
  }
 
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard-main">
        <div className="dashboard2-left dashboard2-left-d">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">{data[1].name}</div>
          </div>

          <div className="admin-options">
            <div className="admin-list-dashboard">
              <a href="/dashboard2" className="admin-list-cont">
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
            <a href="/chat" className="admin-list">
              <img src={ChatbotIcon} alt="Chatbot" />
              <div>Chatbot</div>
            </a>
            <a href="/community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>
            <a className="admin-list">
              <img src={PackageIcon} alt="Package Details" />
              <div>Package Details</div>
            </a>
            <a href="/payment-history" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment History</div>
            </a>
          </div>
        </div>

        <div className="dashboard-right dashboard-right-mb">
          <div className="dashboard-right-container">
            <div className="right-starter">
              <div className="right-starter-h">Good Morning, John doe</div>
              <div className="right-starter-date">Monday, 20 Sep 2023</div>
            </div>

            <div className="dashboard-cards">
              <div className="dashboard-card1">
                <div className="card1-divide dash-card1">
                  <div className="assesment-score dash-asses">
                    <div className="assesment-total">Assesssment Score</div>
                    <div className="total-scored">
                      75/100 <span>Score</span>
                    </div>
                  </div>
                  <div className="brain-icon">
                    <img src={BrainIcon}></img>
                  </div>
                </div>
              </div>
              <div className="dashboard-cards-sec">
                <div className="dashboard-card2">
                  <div className="card1-divide">
                    <div className="assesment-score asses-score">
                      <div className="assesment-total">Total Sessions</div>
                      <div className="total-scored">
                        10 <span>Sessions</span>
                      </div>
                    </div>
                    <div className="brain-icon">
                      <img className="brain-con-2" src={BrainIcon2}></img>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card3">
                  <div className="card1-divide">
                    <div className="assesment-score asses-score1">
                      <div className="assesment-total">Session Attended</div>
                      <div className="total-scored">
                        7/10 <span>Sessions</span>
                      </div>
                    </div>
                    <div className="brain-icon">
                      <img className="brain-con-2" src={BrainIcon3}></img>
                    </div>
                  </div>
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
              {sessions.map((session)=>{
                    return(
                      <>
                      <div className="dash-counsellor-dash2">
                <div className="dash-counsellor-left">
                  <div className="counsellor-main">
                    <div className="counsellor-details">
                      <img src={Counsellor1}></img>
                      <div className="counsellor-info">
                        <div className="counsellor-name-dash2">
                           {name(session.docId)}
                        </div>
                        <div className="anx-dp-dash2">{session.title}</div>
                      </div>
                    </div>
                    <div className="counsellor-schedule">
                      <div className="schedule-date">
                        <img src={Minicalender}></img>
                        <div className="schedule-date-t-dash2">{session.date}</div>
                      </div>
                      <div className="schedule-date">
                        <img src={timeIcon}></img>
                        <div className="schedule-date-t-dash2">
                        {session.time}
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
                      </>
                    )
              })}

           
            </div>

            <div className="upcoming-session">
              <div className="upcoming-session-1">
                <div className="upcoming-session-box">
                  <div className="upcoming-session-p">Upcoming Sessions</div>
                  <div className="upcoming-session-box-flex">
                    <div className="upcoming-session-date">
                      01/09/2023 - 30/09/2023
                    </div>
                    <img src={CalenderIcon}></img>
                  </div>
                </div>
              </div>
              <div className="upcoming-session-1 res-not-inc">
                <div className="upcoming-session-box">
                  <div className="upcoming-session-p">Upcoming Sessions</div>
                  <div className="upcoming-session-box-flex">
                    <div className="upcoming-session-date">
                      01/09/2023 - 30/09/2023
                    </div>
                    <img src={CalenderIcon}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-session-mb">
              <div className="upcoming-session-mb-p">Upcoming Sessions</div>
              <div className="upcoming-session-box-mb-flex upcoming-session-mb-date-us">
                <div className="upcoming-session-mb-date ">01/09 - 30/09</div>
                <img src={CalenderIcon}></img>
              </div>
            </div>
            <div className="client-container">
              <div className="upcoming-left-dash2">
                <div className="upcoming-left-container">

                  {clist.map((co)=>{
                    return(<>
                    <div className="left-content-2">
                    <div className="upcoming-container">
                      <img src={UpcomingIcon}></img>
                      <div className="client-info">
                        <div className="client-name-h1">{co.name}</div>
                        <div className="client-desc">{co.about}</div>
                        <div className="client-desc">
                          {co.edu.institution_name}
                        </div>
                      </div>
                    </div>
                    <div className="client-flex">
                      <div className="client-btn">Join</div>
                      <div className="client-reschedule">Reschedule</div>
                    </div>
                  </div>
                    </>)
                  })}
   
                </div>
              </div>
              <div className="upcoming-session-mb upcoming-session-mb-2 upcoming-session-mb-2-chat">
                <div className="upcoming-session-mb-p">Chatbot</div>
                <div className="upcoming-session-box-mb-flex upcoming-session-box-mb-flex-bot">
                  <div className="upcoming-session-mb-date">01/09 - 30/09</div>
                  <img src={CalenderIcon}></img>
                </div>
              </div>
              <div className="upcoming-left-dash2">
                <div className="upcoming-left-container">
                  <div className="left-content-2">
                    <div className="upcoming-container">
                      <img src={ZenchatIcon}></img>
                      <div className="client-info">
                        <div className="client-name-h1">Topic</div>
                        <div className="client-desc">
                          Chatbot: lorem ipsum dolor si...
                        </div>
                      </div>
                    </div>
                    <div className="client-flex">
                      <div className="client-reschedule-chat">3:00 pm</div>
                    </div>
                  </div>
                  <div className="left-content-1">
                    <div className="upcoming-container">
                      <img src={ZenchatIcon}></img>
                      <div className="client-info">
                        <div className="client-name-h1">Topic</div>
                        <div className="client-desc">
                          Chatbot: lorem ipsum dolor si...
                        </div>
                      </div>
                    </div>
                    <div className="client-flex">
                      <div className="client-reschedule-chat">3:00 pm</div>
                    </div>
                  </div>
                  <div className="left-content">
                    <div className="upcoming-container">
                      <img src={ZenchatIcon}></img>
                      <div className="client-info">
                        <div className="client-name-h1">Topic</div>
                        <div className="client-desc">
                          Chatbot: lorem ipsum dolor si...
                        </div>
                      </div>
                    </div>
                    <div className="client-flex">
                      <div className="client-reschedule-chat">3:00 pm</div>
                    </div>
                  </div>
                  <div className="left-content-1">
                    <div className="upcoming-container">
                      <img src={ZenchatIcon}></img>
                      <div className="client-info">
                        <div className="client-name-h1">Topic</div>
                        <div className="client-desc">
                          Chatbot: lorem ipsum dolor si...
                        </div>
                      </div>
                    </div>
                    <div className="client-flex">
                      <div className="client-reschedule-chat">3:00 pm</div>
                    </div>
                  </div>
                </div>
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
                    <div className="take-ass-h">
                      Assess yourself with assessment!
                    </div>
                    <div className="take-ass-btn">Take Assessment </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dash-counsellor-banner-mb dash-counsellor-banner-mb-d">
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
      </div>
    </>
  );
};

export default Dashboard2;
