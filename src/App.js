import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Livraison from './pages/Livraison';
import HeroSection from './components/HeroSection';
// import Hero from './components/HeroSection'


const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={[< HeroSection/>]} />
            {/* <Route path="about" element={[<Home />]} /> */}
            <Route path="contact" element={[<Contact />]} />
            <Route path="menu" element={[<Menu />]} />
            <Route path="livraison" element={[<Livraison />]} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App