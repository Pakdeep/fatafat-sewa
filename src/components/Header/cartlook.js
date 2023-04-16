import React from "react";

function CartLook(props){
return(    <div className="cartItem">
<div className="cartImage">
  <img
    src={props.image}
    alt=""
  />
</div>
<div className="texts">
  <h4>{props.description}</h4>
  <p>In Stock</p>
  <p>Eligible for FREE Shipping</p>
  <select name="" id="" >
  <option value="">0 (Delete)</option>
  <option value="" selected>Qty: 1</option>
  <option value="">2</option>
  <option value="">3</option>
  <option value="">4</option>
  <option value="">5</option>
  <option value="">6</option>
  <option value="">7</option>
  <option value="">8</option>
  <option value="">9</option>
  <option value="">10+</option></select>
</div>

<h3 className="price">&#8377;{props.price}</h3>
</div>)
}


export default CartLook