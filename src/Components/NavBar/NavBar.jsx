import React from 'react'
import { RiMenu3Line } from 'react-icons/ri';
import { RiCloseLine } from 'react-icons/ri';
import './NavBar.css'
import { useState } from 'react';

const Menu = ()=>(
  <>
          <p><a href="#">Home</a></p>
          <p><a href="#">What is GPT3?</a></p>
          <p><a href="#">Open AI</a></p>
          <p><a href="#">Case Studies</a></p>
          <p><a href="#">Libraries</a></p>
  </>
)


const NavBar = () => {

  const [togglemenu,setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__nav_links_logo'>
         <h1>GPT-3</h1>
        </div>
        <div className='gpt_nav_links_container'>
        <Menu/>
        </div>
      </div>
      <div className='gpt3__nav-sign'>
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
      {/* {togglemenu ? <RiCloseLine color='#ffffff' onClick={()=>setToggleMenu(true)}></RiCloseLine>:<RiMenu3Line onClick={()=>setToggleMenu(false)}></RiMenu3Line>} */}
      {togglemenu && <RiCloseLine onClick={()=>setToggleMenu(false)} style={{cursor:"pointer"}}></RiCloseLine>}
      {!togglemenu && <RiMenu3Line onClick={()=>setToggleMenu(true)} style={{cursor:"pointer"}}></RiMenu3Line>}

      {togglemenu && <div className='gpt__nav_menu_container scale-up-center'>
        <div className='mobile_nav'>
           <Menu/>
           <div className='mobile_nav-sign'>
           <p>Sign In</p>
           <button>Sign Up</button>
      </div>
        </div>
        </div>}
      </div>
    </div>
  )
}

export default NavBar
