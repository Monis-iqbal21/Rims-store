import React from 'react'
import { NavLink } from 'react-router-dom'
import "../components/navbar.css"
import { useAuth } from '../store/auth'
import web_logo from "../images/logo_Web2.png"

const Navbar = () => {
    const { isloggedIn } = useAuth();
    return (
        <>
            <div className="main-container">
                <div className="logo-section">
                    <NavLink className="logo" to="/"><img src={web_logo} alt="" className='logo_nav'/> </NavLink>
                </div>

                <div className="nav-links">
                    <li><NavLink className="links" to="/">Home</NavLink></li>
                    <li><NavLink className="links" to="/about">About</NavLink></li>
                    <li><NavLink className="links" to="/contact">Contact</NavLink></li>
                    <li><NavLink className="links" to="/service">Service</NavLink></li>
                    {isloggedIn ?
                        (<li><NavLink className="links" to="/logout">LogOut</NavLink></li>)
                        :
                        (<>
                            <li><NavLink className="links" to="/login">Login</NavLink></li>
                            <li><NavLink className="links" to="/register">Register</NavLink></li>
                        </>)}




                </div>




            </div>
        </>
    )
}

export default Navbar