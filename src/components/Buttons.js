import React, { Component } from "react";
import { UilWallet } from "@iconscout/react-unicons";
import { UilShoppingCart } from "@iconscout/react-unicons";
export default class Buttons extends Component {
  render() {
    return (
      <div className="btns">
        <button type="submit">
          Buy Now
          <UilWallet />
        </button>
        <button type="submit">
          Add to
          <UilShoppingCart />
        </button>
      </div>
    );
  }
}
