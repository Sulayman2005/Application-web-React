import "./Collapse2.scss"
import React, { useState } from 'react'
import ChevronUp from "../assets/images/ChevronUp.png"
import ChevronDown from "../assets/images/ChevronDown.png"
function Collapse2({ titre, content2}) {
    const [collapse, setcollapse] = useState(true);

    const affContent = () => {
            setcollapse(!collapse)
    }
    
    const affcontentchevron = (collapse ? ChevronDown : ChevronUp)

    return (
        <>
            <div className="textimage2">
                <div className="text_header2" onClick={affContent}>
                    <span>{titre}</span>
                    <div className="chevronValue2">
                        <img src={affcontentchevron} alt="Chevron" />
                    </div>
                </div>
                <div className={`text_content ${collapse ? "visible" : ""}`}>
                    <ul>{content2}</ul>
                </div>
            </div>
        </>
    )
}

export default Collapse2