import React from 'react'
import '../newsletter/News.css'

function News() {
  return (
   <div className="newsletter">
    <h1>Get Exclusive offers on your email</h1>
    <p>Subscribe to our newsletter and stay updated</p>
    <div>
    <input type="email" placeholder=' Email' />
    <button>Subscribe</button>
    </div>
   </div>
  
  )
}

export default News