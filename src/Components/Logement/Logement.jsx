import "./Logement.scss"
import { Link } from "react-router"
function Logement() {
    return (
        <>  
            <Link to="/logement" className="texte_logement">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <img src="logo.png" alt="Logo"/>
                    </div>
                    <Link to="/" className="text" style={{ textDecoration: 'none'}} >
                        <div>Acceuil</div>
                    </Link> 
                    <Link to="/propos" className="text_2">
                        <div>A propos</div>
                    </Link>               
                </nav>
                <footer>
                    <div className="logo_footer2">
                        <img src="logo_footer.png" alt="Logo"/>
                        <p>© 2020 Kasa. All rights reserved</p>
                    </div>
                </footer>
            </Link>
        </>
    )
}

export default Logement