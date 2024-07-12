import React from 'react'
import '../cartitems/Cartitem.css'
import { ShopContext } from '../../Context/Shopcontext'
import { FaCross, FaMinus } from 'react-icons/fa'
import { useContext } from 'react'

function Cartitem() {
    const { product, cartItems, removeToCart } = useContext(ShopContext)


    return (
  
        <div className="cartitem">
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            { product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div>
                            <div className="cartitem-format cartitem-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                                <p> ${e.new_price * cartItems[e.id]} </p>
                                <FaMinus className='cartitems-remove-icon' onClick={() => { removeToCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
             ) }
                return null;
            })}
</div>
       
    )
}

export default Cartitem