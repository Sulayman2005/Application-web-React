import "./Collapse.scss"
import React, { useState } from 'react'
import ChevronUp from "../../../assets/images/ChevronUp.png"
import ChevronDown from "../../../assets/images/ChevronDown.png"
function Collapse({ titre, content2}) {
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
                {collapse && (
                <div className="text_content2">
                    <ul>{content2}</ul>
                </div>
            )}
            </div>
        </>
    )
}

export default Collapse