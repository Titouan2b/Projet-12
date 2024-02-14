import React, { useRef, useState } from 'react'
import "./tab.scss"

export default function Tag(props) {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open);
    }
    const contentRef = useRef()
    if (contentRef.current) console.log(contentRef.current.scrollHeight)
    



  return (
    <div className={'collapse-container ' + props.width}>
        <div className={!open ? "reverse-rotate" : "collapsible"} onClick={toggle}>
            <h3>{props.label}</h3>
        </div>
        <div className="content-parent" ref={contentRef} style={open ? {height: contentRef.current.scrollHeight + "px"} : {height: "0px"}}>
            <div className='content'>
                {props.description}{props.children}
                {!props.equipments ? "" : props.equipments &&(
                <ul>
                    {props.equipments.map((equipment, index) => (
                        <li key={`equipment-${index}`}>{equipment}</li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    </div>
  )
}
