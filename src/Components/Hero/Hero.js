import React from 'react'
import './Hero.css'
import hello from '../Assests/hello.jpeg'
import pic1 from '../Assests/pic-1.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
   <div className="hero">
    <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className="hero-hand-icon">
        <p>new</p>
        <img src={hello} alt=""  />
    </div>
    <p>Collections</p>
    <p>For everyone</p>
</div>
<div className="hero-button">
    <div>
        <Link to='login' >Login</Link>
    </div>

</div>
    </div>
    <div className="hero-right">
<img src={pic1} alt="" />
    </div>
   </div>
  )
}

export default Hero