import React from "react";
import "./community2.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/community-w.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/dash-b.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import CommManIconBlack from "../images/CommManIconBlack.png";
import CommDisIconblue from "../images/CommDisIconblue.png";
import GreyCircleIcon from "../images/grey-circle.png";
import HeartIcon from "../images/heart.png";
import ReplyIcon from "../images/reply.png";
import DownbarIcon from "../images/downbar.png";
import Navbar from "../Navbar/navbar";

const community2 = () => {
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
        <div className="dashboard-left update-comm-left">
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

            <a href="/chat" className="admin-list">
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
                <img src={CommManIconBlack}></img>
                <div className="comm-sub-h">Manage Community</div>
              </a>

              <a href="/community2" className="comm-sub-option-1">
                <img className="comm-sub-img2" src={CommDisIconblue}></img>
                <div className="comm-sub-p">Community Discussion</div>
              </a>
            </div>

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

        <div className="dashboard-right">
          <div className="dashboard-right-container">
            <div className="community2-starter">
              <div className="community2-starter-l">
                <div className="community2-starter-h">Community</div>
                <div className="community2-starter-p">
                  Community/Community discussion
                </div>
              </div>
              <a href="/community3" className="comm-start-btn">
                + Create new Discussion
              </a>
            </div>

            <div className="comm-grp-cat">
              <div className="grp-cat">Group Categories</div>
              <div className="comm-grp-cats">
                <div className="comm-grp-mb">
                  <div className="comm-anx">Anxiety</div>
                  <div className="comm-other">Depression</div>
                  <div className="comm-other">Relationship</div>
                </div>

                <div className="comm-grp-mb">
                  <div className="comm-other">Anger</div>
                  <div className="comm-other">Guilt</div>
                  <div className="comm-other">Sadness</div>
                </div>
              </div>
            </div>

            <div className="comm-grp-chats-container">
              <div className="comm-grp-chats-container-u">
                <img className="gray-cirl" src={GreyCircleIcon}></img>
                <div className="comm-grp-inner">
                  <div className="comm-grp-names">
                    <div className="comm-grp-names-h">Erin Arcand</div>
                    <div className="comm-grp-names-p">11 Sep 2023</div>
                  </div>

                  <div className="comm-grp-chats">
                    <div className="comm-grp-chats-h">
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="comm-grp-chats-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur quis nisi eleifend, pulvinar imperdiet felis.
                      Suspendisse mollis euismod sapien, quis varius dolor
                      hendrerit quis. Suspendisse a condimentum mauris. Duis id
                      turpis auctor, pretium est eu, ornare risus. Praesent
                      pretium sapien sit amet justo.
                    </div>
                  </div>

                  <div className="comm-dis-rxn">
                    <div className="comm-dis-rxns">
                      <img src={HeartIcon}></img>
                      <div className="comm-dis-rxns-h1">20 Felt Same</div>
                    </div>
                    <div className="comm-dis-rxns">
                      <img src={ReplyIcon}></img>
                      <div className="comm-dis-rxns-h2">2 Replies</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comm-grp-chats-container-sub">
                <div className="comm-grp-chats-container-m">
                  <img className="grey-mini" src={GreyCircleIcon}></img>
                  <div className="comm-grp-content">
                    <div className="comm-grp-content-h">
                      Jane,<span> 11 Sep 2023</span>
                    </div>
                    <div className="comm-grp-content-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur quis nisi eleifend, pulv inar mi a, imperdiet
                      felis. Suspendisse mollis euismod sapien, quis varius
                      dolor hendrerit quis. Suspendisse a condimentum mauris.
                    </div>
                  </div>
                </div>

                <div className="comm-grp-chats-container-m">
                  <img className="grey-mini" src={GreyCircleIcon}></img>
                  <div className="comm-grp-content">
                    <div className="comm-grp-content-h">
                      Jane,<span> 11 Sep 2023</span>
                    </div>
                    <div className="comm-grp-content-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur quis nisi eleifend, pulv inar mi a, imperdiet
                      felis. Suspendisse mollis euismod sapien, quis varius
                      dolor hendrerit quis. Suspendisse a condimentum mauris.
                    </div>
                  </div>
                </div>
                <div className="show-less-comm">
                  <div className="show-less-h">Show less</div>
                  <img src={DownbarIcon}></img>
                </div>
              </div>
            </div>
            <div className="comm-grp-lower-cont">
              <div className="comm-grp-chats-container-u comm-grp-chats-container-u-2">
                <img className="grey-mini" src={GreyCircleIcon}></img>
                <div className="comm-grp-inner comm-grp-inner-2">
                  <div className="comm-grp-names">
                    <div className="comm-grp-names-h">Erin Arcand</div>
                    <div className="comm-grp-names-p">11 Sep 2023</div>
                  </div>

                  <div className="comm-grp-chats">
                    <div className="comm-grp-chats-h">
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="comm-grp-chats-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur quis nisi eleifend, pulvinar imperdiet felis.
                      Suspendisse mollis euismod sapien, quis varius dolor
                      hendrerit quis. Suspendisse a condimentum mauris. Duis id
                      turpis auctor, pretium est eu, ornare risus. Praesent
                      pretium sapien sit amet justo.
                    </div>
                  </div>

                  <div className="comm-dis-rxn">
                    <div className="comm-dis-rxns">
                      <img src={HeartIcon}></img>
                      <div className="comm-dis-rxns-h1">20 Felt Same</div>
                    </div>
                    <div className="comm-dis-rxns">
                      <img src={ReplyIcon}></img>
                      <div className="comm-dis-rxns-h2">2 Replies</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="comm-grp-lower-cont comm-grp-lower-cont-0">
              <div className="comm-grp-chats-container-u">
                <img src={GreyCircleIcon}></img>
                <div className="comm-grp-inner">
                  <div className="comm-grp-names">
                    <div className="comm-grp-names-h">Erin Arcand</div>
                    <div className="comm-grp-names-p">11 Sep 2023</div>
                  </div>

                  <div className="comm-grp-chats">
                    <div className="comm-grp-chats-h">
                      Lorem ipsum dolor sit amet, consectetur
                    </div>
                    <div className="comm-grp-chats-p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur quis nisi eleifend, pulvinar imperdiet felis.
                      Suspendisse mollis euismod sapien, quis varius dolor
                      hendrerit quis. Suspendisse a condimentum mauris. Duis id
                      turpis auctor, pretium est eu, ornare risus. Praesent
                      pretium sapien sit amet justo.
                    </div>
                  </div>

                  <div className="comm-dis-rxn">
                    <div className="comm-dis-rxns">
                      <img src={HeartIcon}></img>
                      <div className="comm-dis-rxns-h1">20 Felt Same</div>
                    </div>
                    <div className="comm-dis-rxns">
                      <img src={ReplyIcon}></img>
                      <div className="comm-dis-rxns-h2">2 Replies</div>
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

export default community2;
