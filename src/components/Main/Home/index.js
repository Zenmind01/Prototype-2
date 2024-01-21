import React from "react";
import "./index.css";
import doctor from "../Images/Mask_group.png";
import How from "../Howwehelp";
import Footer from "../Footer";
import Navbar from "../Navbar/index";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Homecontent() {
  return (
    <>
      <Navbar />
      <motion.div
        className="main-content"
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className="hero">
          <img src={doctor} className="landing-image-1" />
          <Fade left>
            <div
              className="free-assessment"
              animate={{ y: 0, scale: 1, opacity: 0.85,transition: { duration: 0.5 } }}
              initial={{ scale: 0, opacity: 0 }}
            >
              <div className="choices">
                <div>Consult.</div>
                <div>Talk.</div>
                <div>Heal.</div>
              </div>
              <div className="description">
                <div className="descp2">Online Counselling therapy with top psychologists</div>
                Anytime, Anywhere, Any device.
              </div>
              <a
                href="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <div className="button-free">
                  <motion.button whileHover={{ scale: 1.05 }}>
                    Take Free Assessment
                  </motion.button>
                </div>
              </a>
            </div>

            <div className="free-assessment-mb free-assessment-mb-c">
              <div className="free-assessment-mb-1">Consult. Talk. Heal.</div>
              <div className="free-assessment-mb-2">
                Online Counselling therapy with top psychologists Anytime,
                Anywhere, Any device.
              </div>
              <div className="free-assessment-mb-3 free-assessment-mb-3-u">
                Take Free Assessment
              </div>
            </div>
          </Fade>
        </div>
        <How />
      </motion.div>
      <Footer />
    </>
  );
}

export default Homecontent;
