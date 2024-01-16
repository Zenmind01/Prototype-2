import React from "react";
import index from "./index.css";
import logo from "../Images/pink_zen 1.png";
import ig from "../Images/iglogo.png";
import linkedin from "../Images/linkedin.png";
import twitter from "../Images/twitter.png";
import connect from "../Images/connect.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-div">
          <div className="footer-content-left">
            <img src={logo} style={{ height: "60px" }} />
            <div>Follow Our Social Media</div>
            <div className="social-logos">
              <img src={ig} />
              <img src={linkedin} />
              <img src={twitter} />
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                Contact Us
              </div>
              <div>For Urgent Help Call</div>
              <div>+91 XXXX8989XX</div>
            </div>
          </div>
          <div className="footer-content-right">
            <div>About Us</div>
            <div>For Individual</div>
            <div>For Corporate</div>
            <div>Terms Of Service</div>
            <div>Privacy Policy</div>
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
        <div
          className="copyright-1"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "80px",
            fontSize: "24px",
          }}
        >
          Copyright @ 2023, All Right Reversed
        </div>
      </div>

      <div className="footer-mb">
        <div className="footer-top-mb">
          <img src={logo}></img>
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
