import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Services from './assets/pages/Services'
import Contact from './assets/pages/Contact'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element ={<Contact />} />
    </Routes>
    </>

  )
}

export default App