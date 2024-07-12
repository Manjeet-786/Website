import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Bread from '../Components/Breadcrumb/Bread';
import Display from '../Components/display/Display';
import Description from '../Components/Descriptions box/Description';
import Related from '../Components/Relatedproduct/Related';

function Product() {
  const {product}=useContext(ShopContext);
  const {productId}=useParams()
  const products=product.find((e)=>e.id===Number(productId))
  return (
    <>
    <Bread products={products}/>
    <Display products={products}/>
    <Description />
    <Related/>
    </>
  )
}

export default Product