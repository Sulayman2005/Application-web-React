import Page from "../Collapse/Collapse.jsx"
import "./Propos.scss"
import logo from "../../assets/images/logo.png"
import React from "react"
import { Link } from "react-router"
function Propos() {

    const Fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
    const Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const Service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const Sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <>
            <div className="element_navbar2">
                <nav className="navbar2">
                    <img src={logo} alt="Logo" className="navbar__logo"/>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                        <div className="text">Accueil</div>
                    </Link> 
                    <Link className="text_2">
                        <div>A propos</div>
                    </Link>               
                </nav>
            </div>
            <div className="banner2"></div>
            <div className="flex">
                <div className="about">
                    <div><Page title="Fiabilité" content={Fiabilité} /></div>
                    <div><Page title="Respect" content={Respect} /></div>
                    <div><Page title="Service" content={Service} /></div>
                    <div><Page title="Sécurité" content={Sécurité} /></div>
                </div>
            </div>
        </>
    )
}

export default Propos