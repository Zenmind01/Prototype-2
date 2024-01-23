import React, { useState } from "react";
import "./Login.css";
import fb from "../../assets/images/facebook-icon.png";
import google from "../../assets/images/google-icon.png";
import close from "../../assets/images/eye-close.png";
import open from "../../assets/images/eye.png";
import register from "../../assets/images/register-img.png";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  // Define the show/hide state outside the function so it persists between renders.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const _handleSubmit = async function (e) {
    
    e.preventDefault();

    // const axios = require("axios");

    let data = JSON.stringify({
      email: email,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://back-zm-01.onrender.com/users/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    await axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.status) {
          // Assuming the response contains a "success" flag for a successful login
          // Redirect the user to the home page upon successful login
          Cookies.set('data', response.data.success._id, { expires: 7 });
          navigate("/dashboard2"); // You might need to change '/home' to the appropriate route
        } else {
          console.log("Login failed. Please check your credentials.");
          // Handle unsuccessful login - show an error message, etc.
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [show, setShow] = useState(false);

  // Handler function to toggle password visibility.
  const handleShow = () => {
    setShow(!show);
  };

  const handleChange = function (e) {
    const { name, value } = e.target;

    if (name === "email") {
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
              <h1 className="form-title">Login</h1>
              <p>
                Create Account?{" "}
                <span className="sign-link">
                  <a href="/signup">SignUp</a>
                </span>
              </p>
            </div>
            <div className="auth-button">
             
            </div>
            <div className="or-divider">
              <div className="line"></div>
              <p className="divider">Or</p>
              <div className="line"></div>
            </div>

            <form onSubmit={_handleSubmit}>
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
                  className="form-control form-control-email"
                  autoCapitalize="none"
                ></input>
              </div>
              <div className="form-group group-2">
                <label htmlFor="password" className="form-label">
                  Password<span className="star">*</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  autoCapitalize="none"
                ></input>
                {/* Dynamically change the eye icon based on the show state */}
                <img
                  className="eye-image eye-image-1 eye-login"
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
                <button
                  type="submit"
                  onClick={_handleSubmit}
                  className="button-signup"
                >
                  Login
                </button>
                <a href="">Forgot Password?</a>
              </div>
            </form>
          </div>
        </div>

        <div className="right">
          <img src={register} />
        </div>
      </section>
    </>
  );
};

export default Login;
