import React from 'react'
import '../offer/offer.css'
import exclusive from '../Assests/pic-1.jpg'
function Offer() {
  return (
   <div className="offers">
    <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>Only on best seller Products</p>
        {/* <button>Check now</button> */}
    </div>
    <div className="offers-right">
        <img src={exclusive} alt="" />
    </div>

   </div>
  )
}

export default Offer