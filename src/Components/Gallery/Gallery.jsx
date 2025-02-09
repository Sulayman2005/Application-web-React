import React from 'react'
import logement from "../../data/logements.json"
import "./Gallery.scss"
import { Link } from "react-router"
function Gallery() {
    return (
        <>
            <div className="text_image">
                {logement.map((data) => (
                    <div key={data.id}>
                        <Link to="/logement">
                            <div className="text">
                                <img src={data.cover} alt={data.title} />
                                <h2>{data.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Gallery