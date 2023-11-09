import "./FooterStyles.css";

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                    <div>
                        <p>Palatty House, Velookara, </p>
                        <p>Kanjirappilly P.O., Chalakudy,</p>
                        <p>Thrissur Dist. Kerala.</p>
                   </div> 
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem"}}/>  
                 +91 9744 727 303</h4>
                    
                </div>
                <div className="email">
                    <h4><Link to="https://mail.google.com/mail/"><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>  
                 jennettjoy7@gmail.com</Link></h4>
                 </div>
            </div>

            <div className="right">
                <div className="social">
                
                <Link to="https://www.facebook.com/jennett.joy.7?mibextid=ZbWKwL"> <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"}} /> </Link> 
                <Link to="https://www.instagram.com/_jen.nett_j7/?igshid=MzNlNGNkZWQ4Mg%3D%3D"><FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"}}/></Link>   
                <Link to="https://www.linkedin.com/in/jennett-joy-a72659222/"><FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"}}/></Link>   
                <p>© 2023-24 Jennett Joy. All rights are reserved
</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer