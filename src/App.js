import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Header from './Containers/Header/Header'
import Brand from './Components/Brand/Brand'
import WhatGPT from './Containers/WhatGPT/WhatGPT'
import Features from './Containers/Features/Features'
import Possibility from './Containers/Possibility/Possibility'
import Footer from './Containers/Footer/Footer'
import Blog  from './Containers/Blog/Blog'
import Call_Action from './Components/Call_Action/Call_Action'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <NavBar></NavBar>
        <Header></Header>
      </div>

      <Brand />
      <WhatGPT />
      <Features></Features>
      <Possibility />
      <Call_Action></Call_Action>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App

