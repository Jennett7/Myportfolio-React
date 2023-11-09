import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/intro-bg.jpg1.jpg"
import Myimg from "../assets/myimg123.png"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="intro-img"
         src={IntroImg} alt="IntroImg"/>  
          
         
        </div>
        
        <div className="content">
          <img className="profile"
          src={Myimg} alt="Myimg"/>
            <p>HI, I'M JENNETT JOY.</p>
            <h1>MERN STACK DEVELOPER</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg