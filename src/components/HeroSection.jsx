
import React from 'react'
import '../styles/hero.css'
import image from "../assests/background.jpg"


function HeroSection() {
  return (
    <div className='home'>
      <img src={image} alt="" style={{ "width": "100%", "height": "100%" }} />
      <div className='hero-image'>
        <h1 className="text">Pedro's Pizzeria</h1>
        <p className="text">PIZZA TO FIT ANY TASTE</p>
        <a href="/menu" className="button text-decoration-none"> Order Now</a>
      </div>
    </div>
  )
}

export default HeroSection
