import React from "react";
import index from "./index.css";
import pc from "../Images/Layer_1-2.png";
import profile from "../Images/profile.png";
import quotes from "../Images/Group 5.png";
import star from "../Images/star-mark.png";
import tick from "../Images/tickmark.png";
import { AiFillStar } from "react-icons/ai";
import Blue from "../Images/blue-1.png";
import Yellow from "../Images/yellow-1.png";
import Pink from "../Images/pink-1.png";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Boundary from "../Images/blue-review-b.png";
import CounsellorL from "../Images/counsellor-l.png";
import { Link } from "react-router-dom";

function How() {
  const openLink = () => {
    // Replace 'your-link-here' with the desired URL
    window.open(
      "https://app-chatbot-fxvebwyjixxoh26r8q7s33.streamlit.app/",
      "_blank"
    );
  };
  return (
    <>
      <div className="how-section">
        <Fade bottom>
          <div className="heading">How We Help</div>
        </Fade>
        <Fade bottom>
          <motion.div className="home-mid-opt">
            <motion.div>
              <img src={Pink}></img>
              <motion.div whileHover={{ scale: 1.1 }} className="cts-btn">
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Counselling Therapy Session
                </a>
              </motion.div>
            </motion.div>
            <motion.div>
              <img className="pink-image" src={Yellow}></img>
              <motion.div whileHover={{ scale: 1.1 }} className="jc-btn">
                <a
                  href="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Join Community
                </a>
              </motion.div>
            </motion.div>
            <motion.div>
              <img className="blue-img" src={Blue}></img>
              <motion.div whileHover={{ scale: 1.1 }} className="cwc-btn">
                <a
                  href="/chat"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Chat with chatbot
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </Fade>
      </div>
      <div className="mid-container">
        <Fade bottom>
          <motion.div className="mid-conatiner-content-1">
            <h3>Need Help in Finding</h3>
            <h1 className="the-right-fit">THE RIGHT FIT?</h1>
            <div className="mid-rect"></div>
            <p className="mid-conatiner-content-1-p1">
              You don’t have to do it alone. Take our quick assessment so we can
              match you to the right therapist?
            </p>
            <motion.button whileHover={{ scale: 1.1 }} className="match-btn">
              Get Matched
            </motion.button>
          </motion.div>
        </Fade>
        <Fade right>
          <div className="mid-conatiner-content-2">
            <div className="counselors-details">
              <div className="counselor-details-main">
                <div className="detail-main-heading">
                  <div className="counselor-profile-img">
                    <img src={profile}></img>
                  </div>
                  <div className="counselor-edu">
                    <h3>Ruhi Sharma</h3>
                    <p>PHD, MSc. in Applies Psychology (RCI Licensed)</p>
                    {/* <p>Psychology (RCI Licensed)</p> */}
                  </div>
                </div>

                <div className="counselor-slots">
                  <div className="counselor-profile-img">
                    <img src={star}></img>
                  </div>
                  <div className="counselor-specialisation-content">
                    <h3>Specialization</h3>
                    <p>
                      Anxiety, Depression, Stress, Relationship Issues, Couple
                      Counseling... Show More
                    </p>
                  </div>
                </div>

                <div className="counselor-slots">
                  <div className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="slot-button-1"
                  >
                    View Profile
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="slot-button-2"
                  >
                    Book Session
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="counselors-details">
              <div className="counselor-details-main">
                <div className="detail-main-heading">
                  <div className="counselor-profile-img">
                    <img src={profile}></img>
                  </div>
                  <div className="counselor-edu">
                    <h3>Ruhi Sharma</h3>
                    <p>PHD, MSc. in Applies Psychology (RCI Licensed)</p>
                    {/* <p>Psychology (RCI Licensed)</p> */}
                  </div>
                </div>

                <div className="counselor-slots">
                  <div className="counselor-profile-img">
                    <img src={star}></img>
                  </div>
                  <div className="counselor-specialisation-content">
                    <h3>Specialization</h3>
                    <p>
                      Anxiety, Depression, Stress, Relationship Issues, Couple
                      Counseling... Show More
                    </p>
                  </div>
                </div>
                <div className="counselor-slots">
                  <div className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="slot-button-1"
                  >
                    View Profile
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="slot-button-2"
                  >
                    Book Session
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="business">
        
        
      </div>
      <div className="reviews">
        <Fade bottom>
          <div className="r-header">What People Say About Zenmind</div>
        </Fade>
        <Fade bottom>
          <motion.div className="reviews-list">
            <motion.div whileHover={{ scale: 1.1 }} className="review-1">
              <img src={quotes} />
              <div className="your-review">
                Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore magna
                aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                labore et dolore magna aliqua.
              </div>
              <div className="user-details-h">User Name , Mumbai</div>
              <div style={{ display: "flex", gap: "2px", fontSize: "24px" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="review-2">
              <img src={quotes} />
              <div className="your-review">
                Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore magna
                aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                labore et dolore magna aliqua.
              </div>
              <div className="user-details-h">User Name , Mumbai</div>
              <div style={{ display: "flex", gap: "2px", fontSize: "24px" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="review-3">
              <img src={quotes} />
              <div className="your-review">
                Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
                eiusmod tempor incidi dunt ut labore et dolore magna
                aliqua.pisci ng elit, sed do eiusmod tempor incididuntdg ut
                labore et dolore magna aliqua.
              </div>
              <div className="user-details-h">User Name , Mumbai</div>
              <div style={{ display: "flex", gap: "2px", fontSize: "24px" }}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </motion.div>
          </motion.div>
          <img className="line-b" src={Boundary}></img>
        </Fade>
      </div>
      <Fade bottom>
        <div className="Counsellor-landing">
          <img className="home-counsellor" src={CounsellorL}></img>
          <div className="counsellor-home-cont">
            <div className="home-counsellor-1">Join As A Counsellor</div>
            <div className="home-counsellor-2">
              you can make a positive impact on the lives of your clients
            </div>
            <Link to="/dashboard-counsellor">
              <motion.div
                className="home-counsellor-3"
                whileHover={{ scale: 1.1 }}
              >
                Join Now
              </motion.div>
            </Link>
          </div>
        </div>
      </Fade>

      <div className="Counsellor-landing-mb">
        <div className="counsellor-home-cont">
          <div className="home-counsellor-1-mb home-counsellor-1">
            Join As A <span>Counsellor</span>
          </div>
          <div className="home-counsellor-2-mb home-counsellor-2">
            you can make a positive impact on the lives of your clients
          </div>
          <Link to="/dashboard-counsellor">
            <motion.div
              className="home-counsellor-3"
              whileHover={{ scale: 1.1 }}
            >
              Join Now
            </motion.div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default How;
