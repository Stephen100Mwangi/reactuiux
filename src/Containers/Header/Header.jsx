import React from 'react'
import { RiAddLine, RiUser2Fill, RiUser3Fill } from 'react-icons/ri'
import './Header.css'

const Header = () => {
  return (
    <div className='gpt3__header sectionpadding' id='home'>
      <div className='gpt__content'>
        <h1 className='gradient_text'>
          Lets Build something amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis mollitia eius voluptates assumenda adipisci expedita aut nisi sunt qui vel ex deserunt distinctio, enim voluptatem nobis aliquam dolore accusantium dolor?</p>

        <div className='gpt__header_content-input'>
          <input type="email" placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt__header_people">
          <div className='people'>
            <div className='user__gpt'><RiUser3Fill/></div>
            <div className='user__gpt'><RiUser3Fill/></div>
            <div className='user__gpt'><RiUser3Fill/></div>
            <div className='user__gpt'><RiUser3Fill/></div>
            <div className='user__gpt'><RiUser3Fill/></div>
            <div className='user__gpt user__gpt-1'><RiUser3Fill/></div>
            <span><RiAddLine/></span>
           
          </div>
          <p><span>1000</span> people requested access in the last 24 hours.</p>
        </div>
        
      </div>
      <div className='gpt__hero-image'>
          <img src="logo512.png" alt="" />
        </div>
    </div>
  )
}

export default Header
