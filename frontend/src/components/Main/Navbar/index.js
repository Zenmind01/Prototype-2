import React, { useState } from "react";
import index from './index.css'
import zenlogo from '../Images/pink_zen 1.png'
import { useNavigate } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import Hambur from "../Images/hamburger.png";
import Home from "../Home/index";
import Signup from "../Registration/SignUp/SignUp";
import Login from "../Registration/Login/Login";
import Fade from 'react-reveal/Fade';



function Navbar(){
    const [showMediaIcons,setShowMediaIcons] = useState(false);
    const navigate = useNavigate()
    const setselected=(event)=>{
        const div =document.querySelectorAll('.options');
        div.forEach(function(div){
            div.classList.remove('fontweight6')
        })
        event.target.classList.add('fontweight6')
 
    }
    const gohome=()=>{
      
        navigate("/home")
    }
    const gosignup=()=>{
      
        navigate("/Signup")
    }
    const gologin=()=>{
      
        navigate("/login")
    }
    const gotoabout=()=>{
        navigate('/about')
    }
    const contact = ()=>{
        navigate('/contactus')
    }
    const counsellor = ()=>{
        navigate('/counsellors')
    }
    return(
        <>
        <div className="Navbar">
            <div className="Navbar-content">
                <div className="logo">
                <a href="/home">
                <img src={zenlogo} className="main-logo logo-res"/>
                </a>
                    
                </div>
                {/* <Fade top> */}
                
                <div className={
                    showMediaIcons?"nav-options mobile-menu-link":"nav-options"
                }>
                    <div onClick={gohome} className="options" >Home </div>
                    <div onClick={gotoabout} className="options">About Us</div>
                    <div onClick={counsellor} className="options options-1">Our Counselors</div>
                    <div onClick={contact} className="options">Contact Us </div>
                    
                    <div className="auth1" onClick={gosignup}>Sign Up </div>
                    <div className="auth2" onClick={gologin}>Login</div>
                    
                </div> 
                <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              {/* <GiHamburgerMenu />  */}
              <img src={Hambur}></img>
            </a>
          </div>
          {/* </Fade> */}
            </div>

        </div>
        </>
    )
}
export default Navbar;
