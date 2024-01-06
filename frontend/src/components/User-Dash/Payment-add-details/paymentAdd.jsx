import React from "react";
import "./paymentAdd.css";

import Profile from "../images/user-profile.png";
import DashboardIcon from "../images/dashnboard-icon.png";
import ProfileIcon from "../images/profile-icon.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentWhiteIcon from "../images/pay-white.png";
import Calender from "../images/calender.png";
import PaymentLine from "../images/payment-line.png";
import GreenPayment from "../images/green-payment.png";
import Counselor from "../images/prev-session-img.png";
import DashIcon from "../images/dash-black.png";
import CommManIcon from "../images/comm-man.png";
import CommDisIcon from "../images/comm-dis.png";
import CommManIconBlack from "../images/CommManIconBlack.png";
import CommDisIconblue from "../images/CommDisIconblue.png";
import Navbar from "../Navbar/navbar";

const Dashboard = () => {
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
      <div className="dashboard1-main">
        <div className="dashboard1-left">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard2" className="admin-list">
              <img src={DashIcon} alt="Profile" />
              <div>Dashboard</div>
            </a>
            <a href="/profile" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Profile</div>
            </a>
            <a href="/session" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>
            <a onClick={openLink} className="admin-list">
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

            <div className="admin-list-dashboard">
              <a href="/payment-history" className="admin-list-cont">
                <img src={PaymentWhiteIcon} alt="Dashboard" />
                <div>Payment</div>
              </a>
            </div>

            <div className="comm-sub-option">
              <a href="/payment-history" className="comm-sub-option-1">
                <img src={CommManIconBlack}></img>
                <div className="comm-sub-h">Payment History</div>
              </a>

              <a href="/add-payment-details" className="comm-sub-option-1">
                <img className="comm-sub-img2" src={CommDisIconblue}></img>
                <div className="comm-sub-p">Add Payment Details</div>
              </a>
            </div>
          </div>
        </div>
        <div className="dashboard1-right dash-right-mb">
          <div className="dashboard1-right-container">
            <div className="addpayment-starter">
              <div className="addpayment-starter-u">Payment History</div>
              <div className="addpayment-starter-l">
                Payment/ Add payment details
              </div>
            </div>

            <div className="addpayment-bank">
              <div className="addpayment-bank-h">Bank Details</div>
              <div className="addpayment-bank-btn">Add</div>
            </div>

            <form className="addpayment-bank-form">
              <div className="addpayment-bank-col">
                <div className="addpayment-bank-row">
                  <label for="bankName">Bank Name</label>
                  <input
                    type="text"
                    id="bankName"
                    placeholder="John Doe"
                  ></input>
                </div>

                <div className="addpayment-bank-row">
                  <label for="branchName">Branch Name</label>
                  <input
                    type="text"
                    id="branchName"
                    placeholder="Dwarka Sector 19"
                  ></input>
                </div>
              </div>

              <div className="addpayment-bank-col">
                <div className="addpayment-bank-row">
                  <label for="accNumber">Account Number</label>
                  <input
                    type="text"
                    id="accNumber"
                    placeholder="1009500950095"
                  ></input>
                </div>

                <div className="addpayment-bank-row">
                  <label for="ifscCode">IFSC Code</label>
                  <input
                    type="text"
                    id="ifscCode"
                    placeholder="SBIN0001245"
                  ></input>
                </div>
              </div>

              <div className="addpayment-bank-col">
                <div className="addpayment-bank-row">
                  <label for="cardName">Name On The Card</label>
                  <input
                    type="text"
                    id="cardname"
                    placeholder="John Doe"
                  ></input>
                </div>
              </div>
            </form>

            <div className="oth-modes-div">Other modes</div>

            <div className="oth-modes-btn">Save</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
