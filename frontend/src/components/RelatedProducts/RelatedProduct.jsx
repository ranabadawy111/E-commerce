import React from 'react';
import "./RelatedProducts.css";
import { Item } from '../Item/Item';
import data_product from './../Assets/data';
export const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {data_product.map((item, i)=>{
                return <Item key={i} item = {item}/>
            })}
        </div>
    </div>
  )
}
