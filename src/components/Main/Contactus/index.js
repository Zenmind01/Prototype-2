import React from "react";
import contact from "../Images/contact.png";
import Navbar from "../Navbar";
import "./index.css";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Footer from "../Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <motion.div
        intial={{ width: 0 }}
        animate={{ width: "85%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
        className="main-content main-content-con"
      >
        <div className="hero">
          <img
            src={contact}
            className="landing-image-3"
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="contact-us">
          <Fade bottom>
            <div className="c-header">Contact Us</div>
          </Fade>
          <Fade bottom>
            <div className="c-content">
              To create a world where everyone experiences happiness, freedom
              from stress, and relief from anxiety, we must collectively embrace
              a multi-faceted approach that prioritizes the well-being of
              individuals, communities, and the global society as a whole{" "}
            </div>
          </Fade>
        </div>
        <div className="form-fill">
          <Fade bottom>
            <div className="form-heading">FILL THE FORM</div>
          </Fade>
          <div className="name-email">
            <Fade bottom>
              <div className=" user-name-c">
                <label for="fname">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="fname"
                  className="fname-1"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="user-email">
                <label for="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="eg: name@domain.com"
                />
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="query">
              <label for="question">Question</label>
              <textarea
                id="question"
                className="question"
                placeholder="Write your message"
              ></textarea>
            </div>
          </Fade>
          <Fade bottom>
            <div className="submit-btn">
              <motion.button whileHover={{ scale: 1.1 }}>Submit</motion.button>
            </div>
          </Fade>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default ContactUs;
