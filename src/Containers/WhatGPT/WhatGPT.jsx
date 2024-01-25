import React from 'react'
import Feature from '../../Components/Feature/Feature'
import './WhatGPT.css'
const WhatGPT = () => {
  return (
    <div className='gpt__what sectionmargin' id='whatgpt3'>
      <div className="gpt__what-feature">
        <Feature title="What is GPT-3" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, corporis id! Dolor cupiditate labore laborum quae quibusdam amet cumque at laudantium reprehenderit. Quis accusantium fugit sapiente pariatur totam impedit suscipit." className="gptTitle"></Feature>
      </div>
      <div className="gpt_what-heading">
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt__what-chat">
        <Feature title="Chatbots" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, corporis id! Dolor cupiditate labore laborum quae quibusdam amet cumque at laudantium reprehenderit. Quis accusantium fugit sapiente pariatur totam impedit suscipit."/>
        <Feature title="Knowledge" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, corporis id! Dolor cupiditate labore laborum quae quibusdam amet cumque at laudantium reprehenderit. Quis accusantium fugit sapiente pariatur totam impedit suscipit."/>
        <Feature title="Education" text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, corporis id! Dolor cupiditate labore laborum quae quibusdam amet cumque at laudantium reprehenderit. Quis accusantium fugit sapiente pariatur totam impedit suscipit."/>
      </div>
    </div>
  )
}

export default WhatGPT
