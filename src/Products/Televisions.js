import React, { useEffect, useState } from "react";
import "./Global.css";
import axios from 'axios'

export default function Televisions() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://ecomm-bend.onrender.com/data/television")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleSubmit=(item)=>{
    axios
    .post(
      "https://ecomm-bend.onrender.com/data/carts/post",
      JSON.stringify(item),
      {
        headers: {
          "Content-type": "application/json"
   }})
  }; 
  
  return (
    <div>
      <label className="category-name">Televisions</label>
      <div className="all-flex-item">
        {products.map((value, index) => {
          return (
            <div className="all-card" key={index}>
              <img
                src={value.url}
                alt="product-images"
                className="product-images"
              />
              <br />
              <label className="all-model-name">{value.modelName}</label>
              <br />
              <label className="all-model-brand">
                {value.brand} - {value.category}
              </label>
              <br />
              <label className="all-model-price">
                ₹ <span className="previous-price">{value.previousPrice}</span>
                &nbsp;&nbsp;&nbsp;₹ {value.price}
              </label>
              <br />
              {!value.added ? (
                <button className="add-cart-button" onClick={()=>{setProducts(products.map(item=>
                {return {
                  ...item,
                  added:item.id===value.id?true:item.added
                }}));handleSubmit(value);}} >
                  Add To Cart
                </button>
              ) : (
                <button className="add-cart-button" onClick={()=>{setProducts(products.map(item=>
                  {return {
                    ...item,
                    added:item.id===value.id?false:item.added
                  }}))}}>Added</button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}