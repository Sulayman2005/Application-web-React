import {Link} from "react-router"
import Page from "../Page.jsx"
import "./Propos.scss"
function Propos() {

    const Fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const Service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const Sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <div className="flex">  
            <nav className="navbar">
                <div className="navbar__logo">
                    <img src="logo.png" alt="Logo"/>
                </div>
                <Link to="/" className="text" style={{ textDecoration: 'none'}} >
                    <div>Accueil</div>
                </Link> 
                <Link to="/propos" className="text_2">
                    <div>A propos</div>
                </Link>               
            </nav>
            <div className="banner2">
            </div>
            <div className="about">
                <div><Page title="Fiabilité" content={Fiabilité} /></div>
                <div><Page title="Respect" content={Respect} /></div>
                <div><Page title="Service" content={Service} /></div>
                <div><Page title="Sécurité" content={Sécurité} /></div>
            </div>
            <footer>
                <div className="logo_footer2">
                    <img src="logo_footer.png" alt="Logo" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Propos