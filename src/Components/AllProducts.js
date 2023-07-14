import React from "react";
import "../Components/AllProducts.css";
import Bikes from "../Products/Bikes";
import Clothes from "../Products/Clothes";
import Furniture from "../Products/Furniture";
import Laptops from "../Products/Laptops";
import Mobile from "../Products/Mobile";
import Music from "../Products/Music";
import Sports from "../Products/Sports";
import Televisions from "../Products/Televisions";

export default function AllProducts() {
  return (
    <>
      <div>
        <Televisions />
        <Mobile />
        <Laptops />
        <Clothes />
        <Furniture />
        <Music />
        <Bikes />
        <Sports />
      </div>
    </>
  );
}