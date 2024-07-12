import React from 'react'
import '../Collection/Collection.css'
import collection from '../Assests/Collection'
import Item from '../item/Item'

function Collection() {
  return (
   <div className="new-collections">
    <h1>NEW COLLECTION</h1>
    <hr />
    <div className="collections">
        {collection.map ((item ,i)=>{
            return <Item  key={i} id={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price}/>
        })}
    </div>

   </div>
  )
}

export default Collection