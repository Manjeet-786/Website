import React from 'react'
import '../Breadcrumb/Bread.css'
import arrow from '../Assests/pic.webp'
import { FaArrowCircleRight } from 'react-icons/fa';

function Bread(props) {
    const {products}=props;
  return (
   <div className="breadcrum">
    HOME <FaArrowCircleRight/> SHOP <FaArrowCircleRight/>{products.category} <FaArrowCircleRight/>{products.name}
   </div>
  )
}

export default Bread