import React from "react";
import "./created.css";

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
import BookedBanner from "../images/booked-banner.png";
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
              <div className="book-blue-circle"></div>
              <div className="book-progress-row-light">Created</div>
            </div>
        </div>

        <img className="book-gray-line" src={GrayLine}></img>
        <img className="book-blue-line" src={BlueLine}></img>
        <img className="book-blue-line book-blue-line-chng" src={BlueLine}></img>
      </div>
      <div className="dashboard1-right dash-right-mb">
        <div className="dashboard1-right-container">
         <div className="slot-book-banner-cont">
         <div className="book-session-starter">
            <img src={Leftbar}></img>
            <div>Slot Booked</div>
          </div>

          <img className="booked-banner" src={BookedBanner}></img>
          <div className="slot-booked-h">Slot Booked</div>
          <Link to="/confirmation" className="go-back-btn">Go back</Link>
          

         </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
