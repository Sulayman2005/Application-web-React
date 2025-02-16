import Navbar from "../Components/Navbar/Navbar.jsx"
import React, { useState } from "react";
import "./Carrousel.scss"
import Collapse from "./Collapse.jsx"
import { useParams } from "react-router-dom"; // ✅ Pour récupérer l'ID
import logements from "../data/logements.json";
import Footer from "../Components/Footer/Footer.jsx"
import Arrowleft from "../assets/images/Arrow-left.png"
import Arrowright from "../assets/images/Arrow-right.png"
function Carrousel() {

    const rating = 3;
    const Respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const Service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    
    {/* 
        const [Index, setIndex] = useState(0);
        
        const imageCarrousel = [
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
    ]

    const nextSlide = () => {
        setIndex(Index + 1);
        if(Index === imageCarrousel.length - 1){
            setIndex(0);
        }
    };

    const prevSlide = () => {
        setIndex(Index === 0 ? imageCarrousel.length - 1 : Index - 1)
    };*/}
    

    const { id } = useParams(); // ✅ Récupère l'ID depuis l'URL
    const logement = logements.find(item => item.id === id); // ✅ Trouver le bon logement

    if (!logement) {
        return <p>Logement introuvable.</p>; // ✅ Gestion d'erreur
    }

    return (
        <>
            <div className="element">
                <Navbar />
                <div className="Carrousel">
                    <div className="element_page" style={{ backgroundImage: `url(${logement.cover})` }}>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                </div>
                <div className="item_logement">
                    <div className="title_logement">Cozy loft on the Canal Saint-Martin</div>
                    <div className="text_logement">Paris, île-de-france</div>

                    <div className="tag_logement">
                        <div className="tag">Cozy</div>
                        <div className="tag">Canal</div>
                        <div className="tag">Paris 10</div>
                    </div>
                    <div className="logement_info">
                        <div className="logement_profil">
                            <div className="text2">Alexandre<br />Dumas</div>
                            <div className="circle"></div>
                        </div>
                        <div className="star_element">
                            {[...Array(5)].map((_, index) => (
                                <p key={index} className={index < rating ? "star_red" : "star_grey"}>★</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="about2">
                    <div className="about3"><Collapse titre="Fiabilité" content2={Respect} /></div>
                    <div className="about4"><Collapse titre="Service" content2={Service} /></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Carrousel