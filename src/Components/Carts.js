import React, { useState, useEffect } from "react";
import "./Carts.css";
import axios from "axios";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

export default function Carts({setShow,setCount}) {

  // const [loding,setLoading]=useState(null);

  const allprice=400;
  const [product, setProduct] = useState({
    name: "React from fb",
    price: 10,
    productBy: "FACEBOOK",
  });

  const makepayment= token =>{
    const body={
      token,
      product
    };
    const headers={
      "Content-Type":"application/json"
    };
    return fetch(``,{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    })
    .then(response=>{
      console.log("Response",response);
      const {status}=response;
      console.log("Status",status);
    })
    .catch(error=>console.log(error));
  };
  const [products, setProducts] = useState([]);

  const getData = () => {
    fetch("https://ecomm-bend.onrender.com/data/carts")
      .then((response) => response.json())
      .then((data) => {setProducts(data);setCount(data.length)});
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("https://ecomm-bend.onrender.com/data/carts/delete/" + id)
      .then((data) => getData());
  };

  let total=0;
  products.map(item=>total=parseInt(item.price)+total)
  return (
    <div className="carts">
        
      <div className="main-cart1">
        <div className="carts-text1">
          <HiArrowNarrowLeft
            onClick={()=>{setShow(null)}}
            className="HiArrowNarrowLeft"
          />
          <span className="carts-text">Continue Shopping</span>
        </div>
        <hr />
        {products.map((value, index) => {
          return (
            <div className="main-cart" key={index}>
            
              <img
                src={value.url}
                alt="product-picture"
                className="cart-image"
              />
              <label className="cart-product-name">
                <span className="cart-product-name-bold">
                  {value.brand} - {value.category}
                  <br />
                </span>
                {value.modelName}
              </label>
             
              <label className="cart-product-final-price">
                ₹ {value.price}
              </label>
              <label
                className="cart-product-delete"
                onClick={() => handleDelete(value.id)}
              >
                Remove
              </label>
            </div>
          );
        })}
      </div>
      <div >
        <h2 className="cart-total">
          <div >{`${"Cart Total:"} ${total} ${"₹"}`}</div>
          <StripeCheckout
            stripeKey="pk_test_51M6WP4SAH7kFRzImXV6IuGXz30quoFYoNKADXWomxk3YGonTwxCKdWaS8kfLHaV8hhoUZ8UJ3zd4u4cE7TLKUT1p00wlhOoSTx"
            token={makepayment}
            name="Card Details"
            amount={allprice}
            shippingAddress
            billingAddress
          >
            <button className="checkout-button">CHECKOUT</button>
          </StripeCheckout>
          
        </h2>
      </div>
    </div>
  );
}
