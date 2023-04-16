import React, { Component } from "react";
import { UilStar } from "@iconscout/react-unicons";

export default class Rating extends Component {
  render() {
    return (
      <>
        <p className="rating">
          <span>2.3k</span>
          <div>
            <UilStar />
            <UilStar />
            <UilStar />
            <UilStar />
            <UilStar />{" "}
          </div>
        </p>
      </>
    );
  }
}
