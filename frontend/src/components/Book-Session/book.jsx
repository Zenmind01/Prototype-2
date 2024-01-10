import React from "react";
import "./book.css";

import GrayLine from "../images/gray-line.png";
import BlueLine from "../images/blue-line.png";
import Leftbar from "../images/left-bar-1.png";
import Rightbar from "../images/right-bar-1.png";
import Calender from "../images/Calender-1.png";
import SelectionOptLine from "../images/selection-opt-line.png";
import yellowCheck from "../images/yellow-check.png";
import { Link } from "react-router-dom";

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
            <div className="book-gray-circle"></div>
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
            <Link to="/session">
              <img src={Leftbar}></img>
            </Link>
            <div>Book Session</div>
          </div>

          <div className="book-session-schedule">
            <div className="choose-time">1. Choose Time</div>

            <div className="book-session-schedule-mid">
              <div className="book-session-date-cont">
                <img className="book-bar" src={Leftbar}></img>
                <div className="book-session-date-mid">
                  <div className="book-session-day">
                    <div className="book-session-day-u">1st October , 2023</div>
                    <div className="book-session-day-l">Sunday</div>
                  </div>
                  <img src={Calender}></img>
                </div>
                <img className="book-bar" src={Rightbar}></img>
              </div>
              <div className="time-select-option">
                <div className="day-option">
                  <div className="day-option-d">Morning</div>
                  <div className="day-option-l">Noon</div>
                  <div className="day-option-l">Evening</div>
                  <div className="day-option-l">Night</div>
                </div>

                <img
                  src={SelectionOptLine}
                  className="selection-opt-line"
                ></img>

                <div className="time-option">
                  <div className="time-white-btn">05:00 A.M</div>
                  <div className="time-blue-btn">05:30 A.M</div>
                  <div className="time-white-btn">06:00 A.M</div>
                  <div className="time-white-btn">06:30 A.M</div>
                </div>

                <div className="time-option-1">
                  <div className="time-white-btn">07:00 A.M</div>
                  <div className="time-white-btn">07:30 A.M</div>
                </div>
              </div>

              <div className="select-session-dur">
                <div className="select-session-dur-1">
                  2. Select Session Duration
                </div>
                <div className="selection-duration">
                  <div className="selection-duration-btn1">30 min</div>
                  <div className="selection-duration-btn2">50 min</div>
                </div>
              </div>

              <div className="session-pricing-select">
                <div className="session-pricing-selection-row">
                  <div className="session-freq">
                    <img src={yellowCheck}></img>
                    <div>1 Session</div>
                  </div>

                  <div className="session-selection-price">1800/ session</div>
                </div>

                <div className="session-pricing-selection-row">
                  <div className="session-freq">
                    <img src={yellowCheck}></img>
                    <div>1 Session</div>
                  </div>

                  <div className="session-selection-price">1800/ session</div>
                </div>
              </div>
            </div>
            <Link to="/confirmation" className="proceed-btn">
              Proceed
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
