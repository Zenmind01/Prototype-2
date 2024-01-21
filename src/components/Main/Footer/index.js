import React from "react";
import index from "./index.css";
import logo from "../Images/zen-new.png";
import ig from "../Images/iglogo.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import connect from "../Images/connect.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <div className="footer-content-left">
            <img src={logo} style={{ height: "60px" }} />
            <div className="social-logos">
              <img src={ig} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
            <div className="copyright-1">
              Copyright @ 2024, All Right Reversed
            </div>
          </div>
          <div className="footer-content-right">
            <div className="link-heads">Links</div>
            <Link to="/home" className="footer-links">
              Home
            </Link>
            <Link to="/about" className="footer-links">
              About
            </Link>
            <Link to="/" className="footer-links">
              Community
            </Link>
            <Link to="/counsellors" className="footer-links">
              For Counsellors
            </Link>
            <Link to="/" className="footer-links">
              Pricing
            </Link>
          </div>

          <div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div
                className="footer-c-cu"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Contact Us
              </div>
              <div>+91 8699427745</div>
              <div>info@email.com</div>
              <div
                className="location-f"
                style={{ fontSize: "18px", fontWeight: "bold" }}
              >
                Location
              </div>
              <div>New Delhi, India</div>
            </div>
          </div>

          <div className="footer-content-rightmost">
            <div className="rightmost-main">
              <img src={connect}></img>
              <p>Connect With Us</p>
            </div>
            <div className="righmost-para">
              <div>We’d like to get your valuable feedback to</div>
              <div>give you an even better experience.</div>
            </div>
            <button
              onClick={() => {
                window.location.href =
                  "https://chat.whatsapp.com/FJVOl5miUzYFcpOOJLwL1N";
              }}
              className="rightmost-connect-button"
            >
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="footer-mb">
        <div className="footer-top-mb">
          <Link to="/home">
            <img src={logo}></img>
          </Link>
          <div className="follow-mb">Follow Our Social Media</div>
          <div className="social-logos">
            <img src={ig} />
            <img src={linkedin} />
            <img src={twitter} />
          </div>
          <div className="footer-mb-cu">
            <div>Contact Us</div>
            <div>For Urgent Help Call</div>
            <div>+91 XXXX8989XX</div>
          </div>
        </div>

        <div className="footer-middle-mb">
          <div>About Us</div>
          <div>For Individual</div>
          <div>For Corporate</div>
          <div>Terms Of Service</div>
          <div>Privacy Policy</div>
        </div>

        <div className="footer-bottom-mb">
          <div className="footer-bottom-1">
            <img src={connect}></img>
            <div className="footer-mb-cwu">Connect With Us</div>
          </div>
          <div className="footer-mb-para">
            <div>We’d like to get your valuable feedback to</div>
            <div>give you an even better experience.</div>
          </div>
          <button
            onClick={() => {
              window.location.href =
                "https://chat.whatsapp.com/FJVOl5miUzYFcpOOJLwL1N";
            }}
            className="rightmost-connect-button"
          >
            Connect
          </button>
        </div>

        <div className="footer-mb-copyright">
          Copyright @ 2024, All Right Reversed
        </div>
      </div>
    </>
  );
}

export default Footer;
