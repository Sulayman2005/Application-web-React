import React, { useState } from "react"
import "./Logement.scss"
import Collapse from "../../Components/Collapse/Collapse.jsx"
import { useParams } from "react-router-dom"
import logements from "../../data/logements.json"
import Arrowleft from "../../assets/images/Arrow-left.png"
import Arrowright from "../../assets/images/Arrow-right.png"

function Logement() {
    const { id } = useParams()
    const logement = logements.find(item => item.id === id)
    const [index, setIndex] = useState(0)

    const imageCarrousel = logement.pictures

    const nextSlide = () => {
        setIndex(index + 1)
        if(index === imageCarrousel.length - 1){
            setIndex(0)
        }
    }

    const prevSlide = () => {
        setIndex(index === 0 ? imageCarrousel.length - 1 : index - 1)
    }

    return (
        <>
            <div className="element">
                <div className="Carrousel">
                    <div className="element_page" style={{ backgroundImage: `url(${imageCarrousel[index]})` }}>
                        {imageCarrousel.length > 1 && (
                            <>
                                <img 
                                    src={Arrowright}
                                    className="btn-right"
                                    onClick={nextSlide}
                                    alt="Next slide"
                                />
                                <img 
                                    src={Arrowleft}
                                    className="btn-left"
                                    onClick={prevSlide}
                                    alt="Prev slide"
                                />
                                <p className="counter">
                                    {index + 1} / {imageCarrousel.length}
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <div className="item_logement">
                    <h2 className="title_logement">{logement.title}</h2>
                    <p className="text_logement">{logement.location}</p>
                    <div className="tag_logement">
                        {logement.tags.map((tag, index) => <span key={index}>{tag}</span>)}
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
            </div>
            <div className="about2">
                <div className="about3">
                    <Collapse title="Description" content={logement.description} />
                </div>
                <Collapse title="Équipements" content={
                    <ul className="equipements-list">
                        {logement.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                } />
            </div>
        </>
    );
}

export default Logement