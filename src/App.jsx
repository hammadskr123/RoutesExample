import React from 'react'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Services from './assets/pages/Services'
import Contact from './assets/pages/Contact'
import Footer from './component/Footer'

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
    <Footer />
    </>

  )
}

export default App