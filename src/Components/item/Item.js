import React from 'react'
import '../item/Item.css'
import { Link } from 'react-router-dom'

function Item(props) {
  return (
  <div className="item">
   <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}  /></Link> 
    <p>{props.name}</p>
    <div className="item-prices">
       <div className="item-prices-new">
       $ {props.new}
        </div> 
       <div className="item-prices-old">
        {props.old}
        $</div> 
    </div>
  </div>
  )
}

export default Item