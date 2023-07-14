import React, { useState } from "react";
import Categories from "./Categories";
import Carts from "./Carts";
import { Route, Routes } from "react-router-dom";
import Televisions from "../Products/Televisions";
import Mobile from "../Products/Mobile";
import Clothes from "../Products/Clothes";
import Laptops from "../Products/Laptops";
import Sports from "../Products/Sports";
import Music from "../Products/Music";
import Furniture from "../Products/Furniture";
import Bikes from "../Products/Bikes";
import AllProducts from "./AllProducts";

import "../Components/AllProducts.css";
import Navbar from "./Navbar";


export default function Home() {
  const [show,setShow] = useState(null);
  const[count,setCount]=useState(0);
  return (
    <>
    <Navbar setShow={setShow} count={count}/>
    <div className="all-header">
          <label>
            <span className="all-header-text">One Platform</span>
            <br />
            <span className="all-header-text1">to make shopping Easier</span>
          </label>
        </div>
        {show== null ? (<AllProducts/>) : (<Carts setShow={setShow} setCount={setCount}/>)}
    </>
  );
}
