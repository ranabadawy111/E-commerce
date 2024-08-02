import React, { useEffect, useState } from 'react';
import "./Popular.css";
import data_product from "../Assets/data";
import { Item } from '../Item/Item';
export const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/api/v1/product/popularinwomen")
    .then((response)=> response.json())
    .then((data)=> setPopularProducts(data));
  },[])
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item, i)=>{
                return <Item key={i} item = {item}/>
            })}
        </div>
    </div>
  )
}
