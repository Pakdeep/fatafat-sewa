import React, { Component } from "react";
import "../Sass/cart.scss";
import CartLook from "./cartlook";
import cartItems from "./cartItem";
export default class Cart extends Component {
  render() {
    return (
      <div className="cartNewPage">
        {cartItems.map((item) => {
          return (
            <CartLook
              description={item.description}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    );
  }
}
