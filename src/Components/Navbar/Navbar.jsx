import React from "react";
import { Link, useLocation } from "react-router"
import logo from "../../assets/images/logo.png"
import "./Navbar.scss"

function Navbar() {
    const location = useLocation()
    return (
        <div className="element_navbar">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="navbar__logo"/>
                <Link to="/" style={{ textDecoration: 'none' }} className="text">
                <div style={{ textDecoration: location.pathname === "/" ? "underline" : "none" }}>
                    Accueil
                </div>
                </Link> 
                <Link to="/propos" style={{ textDecoration: 'none' }} className="text_2">
                    <div style={{ textDecoration: location.pathname === "/propos" ? "underline" : "none" }}>
                        A propos
                    </div>
                </Link>               
            </nav>
        </div>
    )
}

export default Navbar