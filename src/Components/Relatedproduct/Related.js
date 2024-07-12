import React from 'react'
import '../Relatedproduct/Related.css'
import data from '../Assests/data'
import Item from '../item/Item'

function Related() {
  return (
   <div className="relatedproduct">
    <h1>Related Products</h1>
    <hr />
    <div className="relatedproduct-item">
       {
        data.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price}/>
        })
       }
    </div>
   </div>
  )
}

export default Related;