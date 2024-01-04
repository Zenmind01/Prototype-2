import React from "react";
import "./confirmation.css";

import GrayLine from "../images/gray-line.png";
import BlueLine from "../images/blue-line.png";
import Leftbar from "../images/left-bar-1.png";
import Rightbar from "../images/right-bar-1.png";
import Calender from "../images/Calender-1.png";
import SelectionOptLine from "../images/selection-opt-line.png";
import yellowCheck from "../images/yellow-check.png";
import { Link } from "react-router-dom";
import Video from "../images/video.png";
import CalenderDate from "../images/calender-date.png";
import Next from "../images/next.png";

const Dashboard = () => {
  return (
    <div className="dashboard1-main">
      <div className="dashboard1-left">
        <div className="book-left-starter">
          <div className="book-square-def"></div>
          <div className="book-start-cont">
            <div className="book-left-u">Counsellor Name</div>
            <div className="book-left-l">Specialty 1, Specialty 1</div>
          </div>
        </div>

        <div className="book-progress-cont">
          <div className="book-progress-row">
            <div className="book-blue-circle"></div>
            <div className="book-progress-row-dark">Book Slot</div>
          </div>
          <div className="book-progress-row">
            <div className="book-blue-circle"></div>
            <div className="book-progress-row-light">Confirmation</div>
          </div>
          <div className="book-progress-row">
            <div className="book-gray-circle"></div>
            <div className="book-progress-row-light">Created</div>
          </div>
        </div>

        <img className="book-gray-line" src={GrayLine}></img>
        <img className="book-blue-line" src={BlueLine}></img>
      </div>
      <div className="dashboard1-right dash-right-mb">
        <div className="dashboard1-right-container">
          <div className="book-session-starter">
            <Link to="/book-session">
              <img src={Leftbar}></img>
            </Link>
            <div>Confirmation</div>
          </div>

          <div className="confirmation-page-conatiner">
            <div>
              <div className="confirm-booking-starter">Confirm Booking</div>

              <div className="confirm-booking-cont">
                <div className="confirm-booking-border">
                  <div className="Confirm-booking-col">
                    <div className="confirm-booking-video">
                      <div className="confirm-booking-video-u">Video</div>
                      <div className="confirm-booking-video-l">50 mins</div>
                    </div>

                    <div className="confirm-booking-mode">
                      <img src={Video}></img>
                      <div>MODE</div>
                    </div>
                  </div>

                  <div className="confirm-change">Change</div>
                </div>

                <div className="confirm-booking-border">
                  <div className="Confirm-booking-col">
                    <div className="confirm-booking-video">
                      <div className="confirm-booking-video-u">
                        1st Oct, 2023
                      </div>
                      <div className="confirm-booking-video-l">5:00 P.M</div>
                    </div>

                    <div className="confirm-booking-mode">
                      <img src={CalenderDate}></img>
                      <div>DATE</div>
                    </div>
                  </div>

                  <div className="confirm-change">Change</div>
                </div>
              </div>
            </div>

            <div className="coupon-code">
              <input type="text" placeholder="HAVE A COUPON CODE?"></input>
              <img src={Next}></img>
            </div>

            <div className="coupon-line"></div>
            <div className="coupon-desc">
              You’ll be able to apply coupons other verifying your phone number{" "}
            </div>
            <div className="payment-det">
              <div className="payment-det-u">Payment Details</div>
              <div className="price-session">
                <div className="price-session-row">
                  <div className="price-session-row-u">Price for 1 session</div>
                  <div className="price-session-row-l">₹2000</div>
                </div>

                <div className="price-session-row-1">
                  <div className="price-session-row-1-u">Final amount</div>
                  <div className="price-session-row-1-l">₹2000</div>
                </div>
              </div>
            </div>
            <Link to="/created" className="proceed-btn proceed-btn-chng ">
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
