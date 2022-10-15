import React from 'react'
import "./Components.css"
function CompHead(props) {
  return (
    <div className='CompHead'>
        <h1 className="headBoldWhite">{props.h1} <span className='spanBoldGradient'>{props.span}</span> {props.h2} <span className='spanBoldGradient'>{props.span2}</span> {props.h3}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default CompHead