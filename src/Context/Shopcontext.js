import React, { createContext, useState } from 'react'
import product from '../Components/Assests/allproduct'
import Cartitem from '../Components/cartitems/Cartitem';

  export  const ShopContext=createContext(null)
  const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index <product.length+1; index++) {
     cart[index]=0
      
    }
    return cart;
  }
   const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart())

const addToCart=(itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(cartItems);
}
const removeToCart=(itemId)=>{
  setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
}

const gettotalcartitems=()=>{
  let totalitem=0;
  for(const item in cartItems)
    {
      if(cartItems[item]>0)
        {
          totalitem+= cartItems[item];


      }
    }
    return totalitem
}
const contextValue={ gettotalcartitems, product,cartItems,addToCart,removeToCart};
return(
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
)
   }

   export default ShopContextProvider;