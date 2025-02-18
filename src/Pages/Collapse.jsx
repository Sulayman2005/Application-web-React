import React, { useState } from "react";
import "./Collapse.scss";
import ChevronUp from "../assets/images/ChevronUp.png";
import ChevronDown from "../assets/images/ChevronDown.png";

function Collapse({ title, content }) {
    const [contentvisible, setcontentvisible] = useState(false);

    const affContent = () => {
        setcontentvisible(!contentvisible);
    };

    return (
        <>
            <div className="textimage">
                <div className="text_header" onClick={affContent}>
                    <span>{title}</span>
                    <div className="chevronValue">
                        <img src={contentvisible ? ChevronDown : ChevronUp} alt="Chevron" />
                    </div>
                </div>
                <div className={`text_content ${contentvisible ? "visible" : ""}`}>
                    <ul>{content}</ul>
                </div>
            </div>
        </>
    );
}

export default Collapse;
