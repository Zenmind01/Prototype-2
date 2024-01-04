import React from "react";
import index from "./index.css";
import pc from "../Images/Layer_1-2.png";
import profile from "../Images/profile.png";
import quotes from "../Images/Group 5.png";
import star from "../Images/star-mark.png";
import tick from "../Images/tickmark.png";
import {AiFillStar} from "react-icons/ai";
import Blue from "../Images/blue-1.png";
import Yellow from "../Images/yellow-1.png";
import Pink from "../Images/pink-1.png";
import { motion } from "framer-motion";
import Fade from 'react-reveal/Fade';


function How() {
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
            <motion.div whileHover={{scale:1.1}} className="cts-btn">Counselling Therapy
Session</motion.div>
          </motion.div>  
          <motion.div >
            <img className="pink-image" src={Yellow}></img>
            <motion.div whileHover={{scale:1.1}} className="jc-btn">Join Community</motion.div>
          </motion.div>
          <motion.div >
            <img className="blue-img" src={Blue}></img>
            <motion.div whileHover={{scale:1.1}} className="cwc-btn">Chat with chatbot</motion.div>
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
          <p className="mid-conatiner-content-1-p1">You don’t have to do it alone. Take our 
          quick assessment so we can match you to the 
          right therapist?</p>
          <motion.button whileHover={{scale:1.1}}  className="match-btn">Get Matched</motion.button>
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
                    <p>Anxiety, Depression, Stress, Relationship Issues, Couple Counseling...  Show More</p>
                  </div>
                </div>

                <div className="counselor-slots" >
                  <div  className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div  className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                  <motion.button whileHover={{scale:1.1}} className="slot-button-1">View Profile</motion.button>
                  <motion.button whileHover={{scale:1.1}} className="slot-button-2">Book Session</motion.button>
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
                    <p>Anxiety, Depression, Stress, Relationship Issues, Couple Counseling...  Show More</p>
                    
                  </div>
                </div>
                <div className="counselor-slots" >
                  <div  className="counselor-tick">
                    <img src={tick}></img>
                  </div>

                  <div  className="counselor-slot-content">
                    <h3>Available Slots</h3>
                    <p>Sep 8, 2023 11:00 PM</p>
                  </div>
                </div>

                <div className="button-div">
                <motion.button whileHover={{scale:1.1}} className="slot-button-1">View Profile</motion.button>
                  <motion.button whileHover={{scale:1.1}} className="slot-button-2">Book Session</motion.button>
                </div>
                
              </div>
          </div>
        </div>
        </Fade>
      </div>
      <div className="business">
      <Fade bottom>
        <div className="b-header">For Business</div>
        </Fade>
        <div className="b-content">
        <Fade left>
          <div className="register-business">
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod emporincididunt ut labore et dolore magna aliqua Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod emporincididunt ut labore et dolore magna aliqua Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
            <div className="register-btn">
              <motion.button  whileHover={{scale:1.1}} >Register For Free</motion.button>
            </div>
          </div>
          </Fade>
          <Fade right>
          <img className="pc-img" src={pc} />
          </Fade>
        </div>
      </div>
      <div className="reviews">
      <Fade bottom>
        <div className="r-header">What People Say About Zenmind</div>
        </Fade>
        <Fade bottom>
        <motion.div    className="reviews-list">
          <motion.div whileHover={{scale:1.1}} className="review-1">
            <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} className="review-2">
          <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </motion.div>
          <motion.div whileHover={{scale:1.1}} className="review-3">
          <img src={quotes} />
            <div className="your-review">
              Lorem ipsum dolor sit amet, consectetur ad ipiscing elit, sed do
              eiusmod tempor incidi dunt ut labore et dolore magna aliqua.pisci
              ng elit, sed do eiusmod tempor incididuntdg ut labore et dolore
              magna aliqua.
            </div>
            <div className="user-details">User Name , Mumbai</div>
            <div style={{display:'flex',gap:'2px',fontSize:'24px'}}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
          </motion.div>
          
          
        </motion.div>
        </Fade>
      </div>
      
    </>
  );
}

export default How;
