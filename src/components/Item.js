import React, { Component } from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { discount: "50000" };
  }
  render() {
    return (
      <>
        <Link
          to="/purchase"
          className="item"
          state={{
            description: this.props.description,
            image: this.props.image,
            price: this.props.price,
            discount: this.state.discount,
          }}
        >
          <div className="imgWH">
            <img src={this.props.image} alt="itemImage" />
          </div>
          <p className="description">{this.props.description}</p>
          <p className="price">&#8377;{this.props.price}</p>
          <p className="discount">
            <span>&#8377;{this.state.discount}</span> 75% OFF
          </p>
          <Rating />
        </Link>
      </>
    );
  }
}
