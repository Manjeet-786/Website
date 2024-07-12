import React, { useContext, useState } from 'react'
import '../Navbar.css'
import pic from '../Assests/pic.webp'
import { Link } from 'react-router-dom'
import { FaCartPlus, FaShoppingBag } from 'react-icons/fa'
import { ShopContext } from '../../Context/Shopcontext'

function Navbar() {
  const[menu,setMenu]=useState()
  const{ gettotalcartitems}=useContext(ShopContext)
  return (
    <>
    <div className="navbar">
        <div className="nav-logo">
            <FaShoppingBag height={50} width={50} />
            <p>Shopper</p>
            </div>
        <ul className="nav-menu">
            <li  onClick={()=>setMenu("shop")}> <Link style={{textDecoration:"none"}} to='/'> Shop</Link>{menu==="shop"? <hr/> :""}</li>
            <li onClick={()=>setMenu("men")}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu==="men"? <hr/> :""} </li>
            <li onClick={()=>setMenu("women")}><Link style={{textDecoration:"none"}} to='/women'>Women</Link>{menu==="women"? <hr/> :""} </li>
            <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:"none"}} to='/kids'> Kids</Link> {menu==="kids"? <hr/> :""}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>  
           <Link to='/cart'><FaCartPlus height={150} width={50} /></Link> 
            <div className="nav-cart-count">
              {gettotalcartitems()}
              
            </div>
        </div>
     
    </div>
    </>
  )
}

export default Navbar