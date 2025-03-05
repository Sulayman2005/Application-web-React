import React, { useState } from "react"
import "./Collapse.scss"
import ChevronUp from "../../assets/images/ChevronUp.png"
import ChevronDown from "../../assets/images/ChevronDown.png"

function Collapse({ title, content }) {
    const [contentvisible, setcontentvisible] = useState("")

    const affContent = () => {
        setcontentvisible(!contentvisible)
    }

    return (
        <>
            <div className="textimage">
                <div className="text_header" onClick={affContent}>
                    <span>{title}</span>
                    <div className="chevronValue">
                        <img src={contentvisible ? ChevronDown : ChevronUp} alt="" />
                    </div>
                </div>
                <div className={`text_content ${contentvisible ? "visible" : ""}`}>
                    <ul>{content}</ul>
                </div>
            </div>
        </>
    )
}

export default Collapse
