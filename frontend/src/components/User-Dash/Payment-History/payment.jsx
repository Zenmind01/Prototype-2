import React from "react";
import "./payment.css";

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
import Counselor from "../images/prev-session-img.png"
import DashIcon from "../images/dash-black.png";
import CommManIcon from "../images/comm-man.png";
import CommDisIcon from "../images/comm-dis.png";
import PaymentIcon from "../images/payment-img.png";
import Navbar from "../Navbar/navbar";


const Dashboard = () => {
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
          <a className="admin-list">
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
              <img src={CommManIcon}></img>
              <div className="comm-sub-p">Payment History</div>
            </a>

            <a href="/add-payment-details" className="comm-sub-option-1">
              <img className="comm-sub-img2-up" src={CommDisIcon}></img>
              <div className="comm-sub-h">Add Payment Details</div>
            </a> 
          </div>
        </div>
      </div>
 
      <div className="dashboard1-right dash-right-mb">
        <div className="dashboard1-right-container">
          <div className="payment-starter">
            <div className="payment-starter-left">
               <div className="payment-starter-left-u payment-starter-left-u-h">Payment History</div>
               <div className="payment-starter-left-l">Payment/Payment history</div>
            </div>

            <div className="payment-starter-right">
               <div>01/09/2023 - 30/09/2023</div>
               <img src={Calender}></img>
            </div>
          </div>

          <div className="payment-his-opt"> 
            <div className="payment-his-opt-c">All</div>
            <div className="payment-his-opt-c">Paid</div>
            <div className="payment-his-opt-c">Pending</div>
          </div>

          <img className="paym-line" src={PaymentLine}></img>
          <img className="green-pay" src={GreenPayment}></img>

          <div className="Payment-label">
            <div className="payment-label-cont">
              <div className="name">Name</div>
              <div className="date">Date</div>
              <div className="invoice">Invoice ID</div>
              <div className="amount">Amount</div>
              <div className="status">Status</div>
              <div className="action">Action</div>
            </div>
          </div>

          <div className="payment-history-detail">
            <div className="payment-history-detail-cont">
              <div className="payment-history-content">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>

              <div className="payment-history-content payment-history-content-gray">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>
              <div className="payment-history-content">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>
              <div className="payment-history-content payment-history-content-gray">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>
              <div className="payment-history-content">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>
              <div className="payment-history-content payment-history-content-gray">
                <div className="payment-coun-detail">
                <img src={Counselor}></img>
                <div className="pay-coun-name">
                  <div className="pay-coun-name-u">Counselor Name</div>
                  <div className="pay-coun-name-l">ID: 242678687</div>
                </div>
                </div>

                <div className="payment-his-date">20 Sep 2023 8:45 pm</div>
                <div className="payment-his-id">CDJ6788779</div>
                <div className="payment-his-amt">Rs. 2500</div>
                <div className="payment-his-status">Paid</div>
                <div className="payment-his-action">Details</div>
              </div>
            </div>
          </div>

          <div className="payment-history-detail-mb">
             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
              </div>
             </div>

             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
              </div>
             </div>

             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
              </div>
             </div>

             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
              </div>
             </div>

             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
              </div>
             </div>

             <div className="payment-history-mb-cont">
              <div className="pay-his-div">
                <div className="pay-his-c-p">
                  <img src={PaymentIcon}></img>
                  <div className="pay-history-name-d">
                    <div className="pay-history-name-d-h">Counselor Name</div>
                    <div className="pay-history-name-d-p">Rs 2500</div>
                  </div>
                </div>
                <div className="det-btn">Details</div>
              </div>
              <div className="pay-his-paid">
                <div className="pay-his-paid-u">Paid</div>
                <div className="pay-his-paid-l">20 Sep 2023, 7:30pm</div>
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
