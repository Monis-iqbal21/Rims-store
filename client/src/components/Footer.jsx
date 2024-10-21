import "./footer.css"
import logo from "../images/logo_rims.png"

import React from 'react'
import { NavLink } from "react-router-dom"
import yt_logo from "../images/yt_logo.png"
import insta_logo from "../images/Instagram_logo.png"
import fb_logo from "../images/Facebook_Logo.png"
import logo_web from "../images/logo_Web2.png"

const Footer = () => {
    return (
        <div className="footer_main_div">


            <div className="footer_logo">
                <img src={logo_web} alt="logo" className="logo_img" />
                <h2 style={{ margin: "0" }}>Let your drive go <span style={{ color: "rgb(170, 29, 29)" }}>Vrooom!</span></h2>
            </div>



            <div className="footer_navigation">

                <li className="footer_nav_links">
                    <NavLink to="/" className="footer_link">
                        Home
                    </NavLink>
                </li>


                <li className="footer_nav_links">
                    <NavLink to="/about" className="footer_link">
                        About
                    </NavLink>
                </li>


                <li className="footer_nav_links">
                    <NavLink to="/service" className="footer_link">
                        Services
                    </NavLink>
                </li>


                <li className="footer_nav_links">
                    <NavLink to="/contact" className="footer_link">
                        Contact Us
                    </NavLink>
                </li>


            </div>



            <div className="footer_media_container">
                <h2 style={{marginTop:"0px"}}>Our Social Media</h2>
                <div className="footer_media">
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <div className="footer_media_div footer_media_div_1"></div>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <div className="footer_media_div footer_media_div_2"></div>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <div className="footer_media_div footer_media_div_3"></div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer