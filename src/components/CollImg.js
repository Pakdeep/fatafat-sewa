import React, { Component } from "react";

export default class CollImg extends Component {
  render() {
    return (
      <div>
        <div className={this.props.className}>
          <div className="imgWH">
            <img src={this.props.imgUrl1} alt="r1c1" />
          </div>
          <div className="imgWH">
            <img src={this.props.imgUrl2} alt="r1c2" />
          </div>
        </div>
      </div>
    );
  }
}
