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
import CommManIconBlack from "../images/CommManIconBlack.png";
import CommDisIconblue from "../images/CommDisIconblue.png";
import GreyCircleIcon from "../images/grey-circle.png";
import HeartIcon from "../images/heart.png";
import ReplyIcon from "../images/reply.png";
import DownbarIcon from "../images/downbar.png";
import Navbar from "../Navbar2/navbar";

const community2 = () => {
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
            <a href="/dashboard" className="admin-list">
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
                <img src={CommManIconBlack}></img>
                <div className="comm-sub-h">Manage Community</div>
              </a>

              <a
                href="/counsellor-manage-community"
                className="comm-sub-option-1"
              >
                <img className="comm-sub-img2" src={CommDisIconblue}></img>
                <div className="comm-sub-p">Community Discussion</div>
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
            <div className="community2-starter community2-starter-mb">
              <div className="community2-starter-l community2-starter-l-mb">
                <div className="community2-starter-h">Community</div>
                <div className="community2-starter-p">Community discussion</div>
              </div>
              <a
                href="/counsellor-community-discussion"
                className="comm-start-btn"
              >
                + Create new Discussion
              </a>
              <a
                href="/counsellor-community-discussion"
                className="comm-start-btn comm-start-btn-mb"
              >
                + New
              </a>
            </div>

            <div className="comm-grp-cat">
              <div className="grp-cat grp-cat-mn1">Group Categories</div>
              <div className="comm-grp-cats comm-grp-cats-mb">
                <div className="comm-anx">Anxiety</div>
                <div className="comm-other">Depression</div>
                <div className="comm-other">Relationship</div>
                <div className="comm-other">Anger</div>
                <div className="comm-other">Guilt</div>
                <div className="comm-other">Sad</div>
              </div>
            </div>

            <div className="comm-grp-chats-container">
              <div className="comm-grp-chats-container-u">
                <img className="grey-circ" src={GreyCircleIcon}></img>
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
              <div className="comm-grp-chats-container-u">
                <img className="grey-ic" src={GreyCircleIcon}></img>
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

            <div className="comm-grp-lower-cont comm-grp-lower-cont-mb1">
              <div className="comm-grp-chats-container-u">
                <img className="grey-circ" src={GreyCircleIcon}></img>
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
