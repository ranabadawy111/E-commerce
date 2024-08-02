import React, { useEffect, useState } from 'react';
import "./NewCollections.css";
import new_collection from "../Assets/new_collections";
import { Item } from './../Item/Item';
export const NewCollections = () => {
  const [new_collection, seNew_collection]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/api/v1/product/newcollections")
    .then((response)=> response.json())
    .then((data)=> seNew_collection(data));

  },[])
  return (

    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item, i)=>{
                return <Item key= {i} item={item}/>
            })}
        </div>
    </div>
  )
}
