import React, { useState } from 'react'
import "./Page.scss"
import ChevronUp from "../images/ChevronUp.png"
import ChevronDown from "../images/ChevronDown.png"
function Page({ title, content}) {
    const [contentvisible, setcontentvisible] = useState(true);

    const affContent = () => {
        setcontentvisible(!contentvisible)
    }

    const affcontentchevron = (contentvisible ? ChevronDown : ChevronUp)

    return (
        <>
            <div className="textimage">
                <div className="text_header" onClick={affContent}>
                    <span>{title}</span>
                    <div className="chevronValue">
                        <img src={affcontentchevron} alt="Chevron" />
                    </div>
                </div>
                {contentvisible && (
                <div className="text_content">
                    <ul>{content}</ul>
                </div>
            )}
            </div>
        </>
    )
}

export default Page