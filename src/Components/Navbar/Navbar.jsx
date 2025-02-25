import React from "react"
import { Link } from "react-router"
import logo from "../../assets/images/logo.png"
import "./Navbar.scss"
function Navbar() {
    return (
        <div className="element_navbar">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="navbar__logo"/>
                <Link to="/">
                    <div className="text">Accueil</div>
                </Link> 
                <Link to="/propos" style={{ textDecoration: 'none'}} 
                    className="text_2">
                    <div>A propos</div>
                </Link>               
            </nav>
        </div>
    )
}

export default Navbar