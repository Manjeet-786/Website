import React from 'react'
import '../Popular/Popular.css'
import data from '../Assests/data'
import Item from '../item/Item'

function Popular() {
  return (
    <div className="popular">
<h1>POPULAR IN MEN</h1>
<hr />
<div className="popular-item">
   {data.map((item,i)=>{
    return  <Item  key={i} id={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price}  />
    
   })}
</div>
    </div>
  )
}

export default Popular 