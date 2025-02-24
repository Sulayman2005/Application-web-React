import "./Error.scss"
import logo from "../../assets/images/logo.png"
import logo_footer from "../../assets/images/logo_footer.png"
import React from "react"
import { Link } from "react-router"
function Error() {
    return (
        <>  
            <div className="element_navbar">
                <nav className="navbar">
                    <Link to="/" className="navbar__logo">
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <div className="text">Accueil</div>
                    </Link> 
                    <Link to="/propos" style={{ textDecoration: 'none'}} 
                        className="text_2">
                        <div>A propos</div>
                    </Link>               
                </nav>
            </div>
            <div className="container_error">
                <h1 className="error_page">404</h1>
                <p className="text_error">Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className="link_error">
                    <p id="texterror">Retourner sur la page d'accueil</p>
                </Link>
            </div>
            <footer>
                <div className="logo_footer">
                    <img src={logo_footer} alt="Logo"/>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Error