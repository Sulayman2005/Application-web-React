import React from "react"
import { Link } from "react-router"
import "./Navbar.scss"
function Navbar() {
    return (
        <div className="element_navbar">
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    <img src="logo.png" alt="Logo"/>
                </Link>
                <div>
                    <div className="text">Accueil</div>
                </div> 
                <Link to="/propos" style={{ textDecoration: 'none'}} 
                    className="text_2">
                    <div>A propos</div>
                </Link>               
            </nav>
        </div>
    )
}

export default Navbar