import React from 'react'
import './Feature.css'

const Feature = ({title,text}) => {
  return (
    <div className='gpt__features-container'>
      <div className="gpt__feature_cont-title">
        <div className='gpt__title-bar'></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt__cont_text">
        <p>{text}</p>
      </div>
      
    </div>
  )
}

export default Feature
