import React from "react";
import index from "./index.css";
import Abt from "../Images/about-banner.png";
import Navbar from "../Navbar/index";
import How from "../Howwehelp";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";

function Aboutus() {
  return (
    <>
      <Navbar />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        className="main-content"
      >
        <div className="abt-divide">
          <Fade left>
            <div className="hero">
              <img
                src={Abt}
                className="landing-image"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </Fade>
          <Fade right>
            <div className="about-us-div">
              <div className="abt-us">About Us</div>
              <div className="abt-content">
                To create a world where everyone experiences happiness, freedom
                from stress, and relief from anxiety, we must collectively
                embrace a multi-faceted approach that prioritizes the well-being
                of individuals, communities, and the global society as a whole
              </div>
            </div>
          </Fade>
        </div>

        <div className="our-miss">
          <Fade bottom>
            <div className="our-mission">Our Mission</div>
          </Fade>
          <Fade bottom>
            <div className="mission-content">
              Ending the stigma surrounding mental health issues and becoming a
              leading name in the field involves a concerted effort on multiple
              fronts. It requires a combination of advocacy, education, policy
              changes, and support from various stakeholders to create a society
              that understands, accepts, and supports individuals facing mental
              health challenges
            </div>
          </Fade>
        </div>

        <div className="our-team">
          <Fade bottom>
            <div className="header-team">Meet Our Team</div>
          </Fade>
          <Fade bottom>
            <div className="team-members">
              <div className="member">
                <div className="photo-mem"></div>
                <div className="mem-info">
                  <div className="name-mem">Name Last Name</div>
                  <div className="desig-mem">Designing Head</div>
                </div>
              </div>
              <div className="member">
                <div className="photo-mem"></div>
                <div className="mem-info">
                  <div className="name-mem">Name Last Name</div>
                  <div className="desig-mem">Designing Head</div>
                </div>
              </div>
              <div className="member">
                <div className="photo-mem"></div>
                <div className="mem-info">
                  <div className="name-mem">Name Last Name</div>
                  <div className="desig-mem">Designing Head</div>
                </div>
              </div>
              <div className="member">
                <div className="photo-mem"></div>
                <div className="mem-info">
                  <div className="name-mem">Name Last Name</div>
                  <div className="desig-mem">Designing Head</div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </motion.div>
      <Footer className="footer-au"></Footer>
    </>
  );
}

export default Aboutus;
