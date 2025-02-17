import React from "react";
import { Link } from "react-router-dom"; 
import logements from "../../data/logements.json";
import "./Gallery.scss";

function Gallery() {
    return (
        <div className="text_image">
            {logements.map((logement) => (
                <div key={logement.id}>
                    <Link 
                        to={`/carrousel/${logement.id}`}
                    >
                        <div className="text">
                            <img src={logement.cover} alt={logement.title} />
                            <h2>{logement.title}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Gallery;
