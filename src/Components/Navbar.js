import React, { useState } from "react";
import "./NavBar.css";
import bags from "../icons/shoppingbags.jpg";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCategory, BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Navbar({setShow,count}) {
  const [value, setValue] = useState("1");


  const [option, setOption] = useState(false);
  const handleOption = () => {
    setOption((prev) => !prev);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar">
        <label className="bag-name">
          <img src={bags} alt="bags icon" className="bag-img" />
          <span className="app-name">&nbsp;WEB-Shopping</span>
        </label>
        <label>
          <span className="navbar-search">
            <input
              type="search"
              placeholder="Search..."
              className="searchbar"
            />
            <BiSearchAlt2 className="BiSearchAlt2" />
          </span>
        </label>
        <label
          className="navbar-carts"
          onClick={()=>{setShow("nav");}}
        >
          Cart
          <RiShoppingCartLine className="RiShoppingCartLine" />
          <span className="carts-count">{count}</span>
        </label>
        {/* <label className="navbar-user" onClick={handleOption}>
          <BiCategory className="BsPersonCircle" />
          &nbsp;Categories
        </label> */}
      </nav>
    </>
  );
}
