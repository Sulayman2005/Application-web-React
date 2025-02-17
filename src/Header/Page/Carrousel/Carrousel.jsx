import { Link } from "react-router"
import React, { useState } from "react";
import logo from "../../../../public/logo.png"
import "./Carrousel.scss"
import Collapse from "./Collapse.jsx"
import { useParams } from "react-router-dom"; // Pour récupérer l'ID
import logements from "../../../data/logements.json";
import logo_footer from "../../../../public/logo_footer.png"
import Arrowleft from "../../../assets/images/Arrow-left.png"
import Arrowright from "../../../assets/images/Arrow-right.png"
function Carrousel() {

    const { id } = useParams();
    const logement = logements.find(item => item.id === id);

    const [Index, setIndex] = useState(0);
        
    const imageCarrousel = logement.pictures

    const nextSlide = () => {
        setIndex(Index + 1);
        if(Index === imageCarrousel.length - 1){
            setIndex(0);
        }
    };

    const prevSlide = () => {
        setIndex(Index === 0 ? imageCarrousel.length - 1 : Index - 1)
    };
    
    return (
        <>
            <div className="element_navbar">
                <nav className="navbar">
                    <Link to="/" className="navbar__logo">
                        <img src={logo} alt="Logo"/>
                    </Link>
                    <div>
                        <div className="text_2">Accueil</div>
                    </div> 
                    <Link to="/propos" style={{ textDecoration: 'none'}} 
                        className="text_2">
                        <div>A propos</div>
                    </Link>               
                </nav>
            </div>
            <div className="element">
                <div className="Carrousel">
                    <div className="element_page" style={{ backgroundImage: `url(${imageCarrousel[Index]})` }}>
                        <img 
                            src={Arrowright}
                            className="btn-right"
                            onClick={nextSlide}
                        />
                        <img 
                            src={Arrowleft}
                            className="btn-left"
                            onClick={prevSlide}
                        />
                        <p className="counter">
                            {Index + 1} / {imageCarrousel.length}
                        </p>
                    </div>
                </div>
                <div className="item_logement">
                    <h2 className="title_logement">{logement.title}</h2>
                    <p className="text_logement">{logement.location}</p>

                    <div className="tag_logement">
                        {logement.tags.map((tag, i) => <span key={i}>{tag}</span>)}
                    </div>
                    <div className="logement_info">
                        <div className="logement_profil">
                            <div className="text2">{logement.host.name}</div>
                            <div className="circle">
                                <img src={logement.host.picture} alt="picture host" />
                            </div>
                        </div>
                        <div className="star_element">
                            {[...Array(5)].map((_, index) => (
                                <p key={index} className={logement.rating > index ? "star_red" : "star_grey"}>★</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about2">
                    <div className="about3">
                        <Collapse titre="Description" content2={logement.description} />
                    </div>
                    <Collapse titre="Équipements" content2={
                        <ul className="equipements-list">
                            {logement.equipments.map((equip, i) => (
                                <li key={i}>{equip}</li>
                            ))}
                        </ul>
                    } />
                </div>
            </div>
            <footer>
                <div className="logo_footer2">
                    <img src={logo_footer} alt="Logo"/>
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Carrousel