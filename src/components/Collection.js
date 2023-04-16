import React, { Component } from "react";
import CollImg from "./CollImg";

export default class Collection extends Component {
  render() {
    return (
      <div className="collection">
        <h3>{this.props.heading}</h3>
        <CollImg
          className="fRow"
          imgUrl1={this.props.imgUrl1}
          imgUrl2={this.props.imgUrl2}
        />
        <CollImg
          className="fRow"
          imgUrl1={this.props.imgUrl3}
          imgUrl2={this.props.imgUrl4}
        />
      </div>
    );
  }
}
