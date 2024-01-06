import React, { useEffect, useState } from "react";
import "./profile.css";

import Profile from "../images/user-profile.png";
import ProfileImg from "../images/profile-img.png";
import Camera from "../images/camera.png";
import DashboardIcon from "../images/profile-w.png";
import ProfileIcon from "../images/dash-b.png";
import SessionIcon from "../images/session-icon.png";
import ChatbotIcon from "../images/chat-icon.png";
import CommunityIcon from "../images/community-icon.png";
import PackageIcon from "../images/package-icon.png";
import PaymentIcon from "../images/payment-icon.png";
import Cross from "../images/cross.png";
import Downbar from "../images/downbar.png";
import PerInfo from "../images/profile-info.png";
import Assess from "../images/profile-assess.png";
import Navbar from "../Navbar2/navbar";
import axios from "axios";

const Dashboard = () => {
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {}, []);

  const _handleSubmit = async function (e) {
    e.preventDefault();

    // const axios = require("axios");

    let data = JSON.stringify({
      phone: phone,
      dob: dob,
      gender: gender,
      about: "im a counsellor",
      totalYearsOfExprience: 0,
      edu: [
        {
          institution_name: "",
          degree: "",
          yearOfPassing: "",
          duration: "",
        },
      ],
      exp: [
        {
          company_name: "",
          desgination: "",
          servicePeriod: "",
          location: "",
        },
      ],
      Govt_id: [
        {
          type: "",
          number: "",
        },
      ],
      bankDetail: {
        bank_name: "",
        ac_no: "",
        ifsc_code: "",
        branch_name: "",
        upi: "",
        card_no: "",
      },
    });

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "'http://localhost:2626/doc/658ff144f5321292d2728a15'",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "phone") {
      setPhone(value);
    } else if (name === "dob") {
      setDob(value);
    } else if (name === "gender") {
      setGender(value);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="dashboard1-main">
        <div className="dashboard1-left dashboard1-left-cdash">
          <div className="dashboard-profile">
            <img src={Profile} alt="Profile" />
            <div className="dash-profile-name">Martin Stanton</div>
          </div>

          <div className="admin-options">
            <a href="/dashboard-counsellor" className="admin-list">
              <img src={ProfileIcon} alt="Profile" />
              <div>Dashboard</div>
            </a>

            <div className="admin-list-dashboard">
              <a href="/profile-counsellor" className="admin-list-cont">
                <img src={DashboardIcon} alt="Dashboard" />
                <div>Profile</div>
              </a>
            </div>
            <a href="/session-counsellor" className="admin-list">
              <img src={SessionIcon} alt="Session" />
              <div>Session</div>
            </a>

            <a href="/counsellor-community" className="admin-list">
              <img src={CommunityIcon} alt="Community" />
              <div>Community</div>
            </a>

            <a href="/payment-counsellor" className="admin-list">
              <img src={PaymentIcon} alt="Payment History" />
              <div>Payment</div>
            </a>
          </div>
        </div>

        <div className="dashboard1-right dash-right-mb">
          <div className="profile-container">
            <div className="profile-starter">
              <div className="profile-starter-h">Profile</div>
            </div>

            <div className="profile-subtopic-cont">
              <div className="profile-subtopic-cont-left">
                <div className="profile-sub-u">Subtopic</div>
                <div className="profile-sub-l">Personal Information</div>
              </div>

              <div className="profile-img-merge">
                <img src={ProfileImg} className="profile-subtopic-img1"></img>
                <img src={Camera} className="profile-subtopic-img2"></img>
              </div>
            </div>
          </div>

          <div onSubmit={_handleSubmit} className="profile-form">
            <div className="profile-form-cont">
              <div className="profile-form-info">
                <label for="fname">
                  First name<span>*</span>
                </label>
                <input type="text" id="fname" placeholder="John Doe"></input>
              </div>

              <div className="profile-form-info profile-form-info-mb">
                <label for="email">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@domain.com"
                ></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-mb profile-form-info-mb-mob">
                <label for="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="+91 9500950095"
                ></input>
              </div>

              <div className="profile-form-info profile-form-info-mb-dob">
                <label for="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={dob}
                  onChange={handleChange}
                  placeholder="20/September/2000"
                ></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-mb-gen">
                <label for="choices">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={handleChange}
                >
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                  <option value="option3">Prefer Not to Say</option>
                </select>
              </div>
            </div>

            <form className="c-profile-abt">
              <label>About</label>
              <textarea
                className="abt-txt-area"
                type="text"
                rows={8}
                cols={128}
              ></textarea>
              <textarea
                className="abt-txt-area-mb"
                type="text"
                rows={8}
                cols={36}
              ></textarea>
            </form>
          </div>

          <div className="c-profile-qual-cont">
            <div className="c-profile-qual-u">Qualification</div>
            <div className="c-profile-qual-l">Add</div>
          </div>

          <div className="profile-form">
            <div className="profile-form-cont">
              <div className="profile-form-info">
                <label for="uni">University</label>
                <input type="text" id="uni" placeholder="Lorem Ipsum"></input>
              </div>

              <div className="profile-form-info profile-form-info-collage">
                <label for="Collage">Collage</label>
                <input
                  type="text"
                  id="Collage"
                  placeholder="Lorem Ipsum"
                ></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-yop">
                <label for="yop">Year of passing</label>
                <input type="text" id="ypp" placeholder="2014"></input>
              </div>

              <div className="profile-form-info profile-form-info-per">
                <label for="per">Percentage</label>
                <input type="text" id="per" placeholder="95.2%"></input>
              </div>
            </div>
          </div>

          <div className="c-profile-qual-cont-1">
            <div className="c-profile-qual-u c-profile-qual-u-pe">
              Professional Experience
            </div>
            <div className="c-profile-qual-l">Add</div>
          </div>

          <div className="profile-form">
            <div className="profile-form-cont ">
              <div className="profile-form-info">
                <label for="Desn">Designation</label>
                <input type="text" id="Desn" placeholder="Pyschologist"></input>
              </div>

              <div className="profile-form-info profile-form-info-org">
                <label for="org">Organization name</label>
                <input type="text" id="org" placeholder="Lorem Ipsum"></input>
              </div>
            </div>
            <div className="profile-form-cont">
              <div className="profile-form-info profile-form-info-job">
                <label for="loc">Job location</label>
                <input type="text" id="loc" placeholder="Delhi"></input>
              </div>

              <div className="profile-form-info profile-form-info-tyop">
                <label for="exp">Toal year of experience</label>
                <input
                  type="text"
                  id="exp"
                  placeholder="20/September/2000"
                ></input>
              </div>
            </div>
          </div>

          <div className="c-profile-qual-cont-2 c-profile-qual-cont-2-gi">
            <div className="c-profile-qual-u">Government ID</div>
            <div className="c-profile-qual-l">Add</div>
          </div>

          <div className="profile-form">
            <div className="profile-form-cont">
              <div className="profile-form-info">
                <label for="adhaar">Aadhar Card number</label>
                <input
                  type="text"
                  id="adhaar"
                  placeholder="3000 4654 4546 3546"
                ></input>
              </div>

              <div className="profile-form-info profile-form-info-pan">
                <label for="pan">Pan Card number</label>
                <input type="text" id="pan" placeholder="CDJPK87649"></input>
              </div>
            </div>
          </div>

          <div
            onClick={_handleSubmit}
            className="profile-save-btn profile-save-btn"
          >
            Save
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
