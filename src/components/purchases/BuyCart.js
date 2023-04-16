// import React, { Component } from 'react'
import { useState } from "react";
import "./Buy_cart.scss";
import { useLocation } from "react-router-dom";

const Buy_cart = () => {
  
  const location = useLocation();
  const { description, image, price, discount } = location.state;
  const [count,setCount]=useState(0)
  const handleClick=()=>{

  }
   const handleClick2=()=>{
    let x=count;
    setCount(++x)
    console.log(x)
  }

  return (
    <div className="Buy_cart">
      <div className="imageWH">
        <div className="sideImg">
          <img src={image} alt="otherimages" />
          <img src={image} alt="otherimages" />
          <img src={image} alt="otherimages" />
          <img src={image} alt="otherimages" />
          <img src={image} alt="otherimages" />
        </div>
        <div className="activeImg">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="texts">
        <p className="desc">{description}</p>
        <h4>&#8377;{price}</h4>
        <h4 style={{textDecoration:"line-through"}}>&#8377;{discount}</h4>
        <div className="buttons">
          <button className="btns1" onClick={handleClick}>Buy Now</button>
          <button className="btns2" onClick={handleClick2}>Add to Cart</button>
        </div>
        <div className="specification">
          <h2>Specifications</h2>
          <ul>
            <li>
              <span>Brand</span> Fujitsu
            </li>
            <li>
              <span>Series</span> Fujitsu UH-X Series
            </li>
            <li>
              <span>Screen</span> Size 13.3 Inches
            </li>
            <li>
              <span>Colour</span> Black
            </li>
            <li>
              <span>Hard Disk Size</span> 512 GB
            </li>
            <li>
              <span>CPU Model</span> Core i5
            </li>
            <li>
              <span>RAM Memory</span> Installed Size 16 GB
            </li>
            <li>
              <span>Operating System</span> Windows 11 Home
            </li>
            <li>
              <span>Special Feature</span> Fingerprint Reader, Light Weight,
              Backlit Keyboard, Thin
            </li>
            <li>
              <span>Graphics Card Description</span> Integrated
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Buy_cart;
