import React from 'react';
import "./NewsLetter.css";
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Subscripe to our newletter and stay updated</p>
        <div>
            <input type="email" name="" id="" placeholder='Your Email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}
