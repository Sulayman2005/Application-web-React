import "./Error.scss"
import React from "react"
import { Link } from "react-router"
function Error() {
    return (
        <>
            <div className="container_error">
                <h1 className="error_page">404</h1>
                <p className="text_error">Oups! La page que vous demandez n'existe pas</p>
                <Link to="/" className="link_error">
                    <p id="texterror">Retourner sur la page d'accueil</p>
                </Link>
            </div>
        </>
    )
}

export default Error