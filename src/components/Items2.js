import React, { Component } from "react";
import Item from "./Item";
import products from "../Products";

export default class Items2 extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: "antiquewhite",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#e77c2f",
          }}
        >
          <h2>Today's Deal</h2>
        </div>
        <div className="items2">
          {products.map((product, index) => {
            return (
              <Item
                key={product.index}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
