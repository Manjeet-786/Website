import React, { useContext } from 'react'
import '../display/Display.css'
import { FaStar } from 'react-icons/fa'
import { ShopContext } from '../../Context/Shopcontext'

function Display(props) {
    const{addToCart}=useContext(ShopContext)
    const{products}=props;
  return (
   <div className="productdisplay">
    <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
            <img src={products.image} alt="" />
        </div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img' src={products.image} alt="" />
</div>
    </div>
    <div className="productdisplay-right">
        <h1>{products.name}</h1>
        <div className="productdisplay-right-star">
           <span>⭐</span>
           <span>⭐</span>
           <span>⭐</span>
        </div>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-prices-old">
            ${products.old_price}
        </div>
        <div className="productdisplay-right-prices-new">
          $  {products.new_price}
        </div></div>
        <div className="productdisplay-right-des">
         Get High Quality Products
         <p> Click Here To Buy :</p>
        </div>
        {/* <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div> */}
        <button onClick={()=>{addToCart(products.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
            <span>Category : </span>T-Shirts , Crop-Top,jeans
        </p>
        <p className="productdisplay-right-category">
            <span> Tags : </span>Modern ,Latest 
        </p>
        </div>
        
    </div>
  
  )
}

export default Display;