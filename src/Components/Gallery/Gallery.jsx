import React from "react";
import { Link } from "react-router-dom"; // ✅ Import corrigé
import logements from "../../data/logements.json"; // ✅ Import du fichier JSON
import "./Gallery.scss";

function Gallery() {
    return (
        <div className="text_image">
            {logements.map((logement) => (
                <div key={logement.id}>
                    <Link 
                        to={`/carrousel/${logement.id}`} // ✅ Envoi de l'ID dans l'URL
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
