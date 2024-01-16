import React, { useEffect, useState } from "react";
import "./SignUp.css";
import fb from "../../assets/images/facebook-icon.png";
import google from "../../assets/images/google-icon.png";
import close from "../../assets/images/eye-close.png";
import open from "../../assets/images/eye.png";
import register from "../../assets/images/register-img.png";
import Navbar from "../../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const SignUp = () => {
  // Define the show/hide state outside the function so it persists between renders.
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const _handleSubmit = async function (e) {
    e.preventDefault();

    // const axios = require("axios");

    let data = JSON.stringify({
      name: name,
      email: email,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://back-zm-01.onrender.com/users/signup",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if(response.data.status){
          Cookies.set('data', response.data.message._id, { expires: 7 });
          navigate("/dashboard2");}
        else{

        }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handler function to toggle password visibility.
  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "username") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <>
      <Navbar />
      <section className="signup">
        <div className="left">
          <div className="container">
            <div className="sign-up-box">
              <h1 className="form-title">Sign Up</h1>
              <p>
                Already have an Account?{" "}
                <span className="sign-link">
                  <a href="/login">Login</a>
                </span>
              </p>
            </div>
            <div className="auth-button">
              <button type="button" className="fb-button">
                <img className="fb-icon" src={fb} alt="fb-icon"></img>
                Use Facebook
              </button>
              <button type="button" className="fb-button">
                <img className="google-icon" src={google} alt="fb-icon"></img>
                Use Google
              </button>
            </div>
            <div className="or-divider">
              <div className="line"></div>
              <p className="divider">Or</p>
              <div className="line"></div>
            </div>
            <form onSubmit={_handleSubmit} className="form-reg">
              <div className="form-group group">
                <label htmlFor="name" className="form-label">
                  Full Name<span className="star">*</span>
                </label>
                <input
                  id="username"
                  name="username"
                  value={name}
                  onChange={handleChange}
                  type="name"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group group">
                <label htmlFor="email" className="form-label">
                  E-mail<span className="star">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                ></input>
              </div>
              <div className="form-group group-2">
                <label htmlFor="password" className="form-label">
                  Password<span className="star">*</span>
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  type={show ? "text" : "password"}
                  className="form-control"
                  style={{ position: "relative" }}
                ></input>
                {/* Dynamically change the eye icon based on the show state */}
                <img
                  className="signup-eyeimg"
                  onClick={handleShow}
                  src={show ? close : open}
                  alt="Show/Hide Password"
                ></img>
              </div>
              <div className="form-group-check">
                <input
                  type="checkbox"
                  id="check"
                  className="form-check-input custom-checkbox"
                ></input>
                <label htmlFor="check" className="form-check-label">
                  Remember Password
                </label>
              </div>
              <div className="Sign-up-box">
                <button onClick={_handleSubmit} className="button-signup">
                  Sign Up
                </button>
                <p className="p-gap">
                  By Signing Up, You Agree To Our{" "}
                  <span>
                    <a href="">Term of Service</a>
                  </span>
                </p>
                <p>
                  And Acknowledge That You Have Read Our{" "}
                  <span>
                    <a href="">Privacy Policy</a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <img src={register} alt="Registration Image"></img>
        </div>
      </section>
    </>
  );
};

export default SignUp;
