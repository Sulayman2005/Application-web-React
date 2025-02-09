import React from "react"
import { Link } from "react-router"
import "./Navbar.scss"
function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src="logo.png" alt="Logo"/>
                </div>
                <div>
                    <div className="text">Acceuil</div>
                </div> 
                <Link to="/propos" style={{ textDecoration: 'none'}} 
                    className="text_2">
                    <div>A propos</div>
                </Link>               
            </nav>
        </>
    )
}

export default Navbar