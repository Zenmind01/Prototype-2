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
import Navbar from "../Navbar2/navbar";

const community3 = () => {
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
            <div className="community3-starter">
              <div className="community3-starter-l">
                <div className="community3-starter-h">
                  Create New Discussion
                </div>
                <div className="community3-starter-p">
                  Community/Community discussion/Create new discussion
                </div>
              </div>
            </div>

            <div className="comm-grp-cat">
              <div className="grp-cat grp-cat-mb">Group Categories</div>
              <div className="comm-grp-cats comm-grp-cats-mb">
                <div className="comm-anx">Anxiety</div>
                <div className="comm-other">Depression</div>
                <div className="comm-other">Relationship</div>
                <div className="comm-other">Anger</div>
                <div className="comm-other">Guilt</div>
                <div className="comm-other">Sad</div>
              </div>
            </div>

            <div className="Create-new-dis-cont Create-new-dis-cont-mb">
              <div className="new-dis-form">
                <div className="new-topic-form">
                  <div>Topic?</div>
                  <input
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing."
                  ></input>
                </div>

                <div className="new-topic-form-l">
                  <div>Describe your Concern</div>
                  <input
                    type="text"
                    placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  emporin cididunt ut labore et
 dolore magna aliqua."
                  ></input>
                </div>

                <div className="new-dis-checkbox">
                  <input type="checkbox"></input>
                  <div>Ask Anonymously</div>
                </div>
              </div>
              <div className="dis-btn">Post</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default community3;
