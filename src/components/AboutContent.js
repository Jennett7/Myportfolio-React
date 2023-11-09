import { Link } from "react-router-dom"
import "./AboutContent.css"
import React1 from "../assets/react1.jpg.jpg";
import React2 from "../assets/react2.webp.webp";
import Myimg from "../assets/myimg123.png";
import Resume from "../assets/resume1.png";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I ?</h1>
        <img className="profile1"
          src={Myimg} alt="Myimg"/>
        <p>I am Jennett Joy, A MERN Stack Developer</p>
        <a
        href={Resume}
        download="Resume"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn">Download Resume</button>
      </a>
        
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1}
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2}
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent