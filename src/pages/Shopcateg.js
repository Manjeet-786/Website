import React, { useContext } from 'react'
import '../pages/Css/Shopcateg.css'
import { ShopContext } from '../Context/Shopcontext'
import Item from '../Components/item/Item'

function Shopcateg(props) {
  const {product}=useContext(ShopContext)
  return (
  <div className="shop-category">
<img  className='shopcategory-banner' src={props.banner} alt=""  height={300} width={500}/>
<div className="shopcategory-indexsort">
  <p>
    <span>Showing 1-12</span> out of 36 products
  </p>
  <div className="shopcategory-sort">
    Sort by
  </div>
</div>
<div className="shopcategory-products">
  {product.map((item,i)=>{
   if (props.category===item.category) {
    return  <Item  key={i} id={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price}/>
    }
    else{
      return null
    }
  })}
</div>
<div className="shopcategory-load">
  Select From above
</div>
  </div>
  )
}

export default Shopcateg