import React from 'react'
import product from '../icons/loginimage.jpg';
import './MainContent.css';

export default function MainContent() {
  return (
    <>
    <div className='maincontent'>
      <div className='cards'>
        <img src={product} alt="product-image" className='product-image'/><br/>
        <label className='product-name'>product name</label><br/>
        <label className='product-price'>product price</label><br/>
        <button className='addtocart'>Add to Cart</button>
      </div>
    </div>
    </>
  )
}
