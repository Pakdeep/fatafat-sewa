import React, { Component } from "react";
import "../Sass/Item.scss";
import mob from "./allItems/allMobiles";
import Brand from "./Brand";

export default class Mobiles extends Component {
  render() {
    return (
      <div className="itemContainer">
        <h3 className="heading">Mobiles By Brand</h3>
        <div className="items">
          {mob.map((mobile) => {
            return (
              <Brand imageUrl={mobile.brandLogo} name={mobile.brandName} />
            );
          })}
        </div>
      </div>
    );
  }
}
