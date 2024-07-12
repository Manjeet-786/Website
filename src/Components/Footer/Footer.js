import React from 'react'
import '../Footer/Footer.css'
import footer from '../Assests/pic-1.jpg'
import { FaFacebook, FaInstagram, FaShoppingBag, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
  <div className="footer">
    <div className="footer-logo">
       <FaShoppingBag/>
        <p>Shopper</p>
    </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className="footer-social-icon">
        <div className="footer-icon-container">
        <FaInstagram/>
        </div>
        <div className="footer-icon-container">
      <FaFacebook/>
        </div>
        <div className="footer-icon-container">
        <FaTwitter/>
        </div>
    </div>
    <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024</p>
    </div>
  </div>
  )
}

export default Footer