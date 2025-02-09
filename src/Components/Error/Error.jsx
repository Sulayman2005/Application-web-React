import "./Error.scss"
import Navbar from "../Navbar/Navbar.jsx"
import React from "react"
import { Link } from "react-router"
function Error() {
    return (
        <>
            <div className="container_error">
                <Navbar />
                <h1 className="error_page">404</h1>
                <p className="text_error">Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className="link_error">
                    <p id="texterror">Retourner sur la page d'accueil</p>
                </Link>
            </div>
            <footer>
                <div className="logo_footer2">
                    <img src="logo_footer.png" alt="Logo"/>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Error