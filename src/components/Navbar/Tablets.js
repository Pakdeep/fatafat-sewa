import React, { Component } from 'react'
import "../Sass/Item.scss"
import Brand from './Brand';
import tab from "./allItems/allTablets"
export default class Tablets extends Component {
  render() {
    return (
      <div className="itemContainer">
      <h3 className="heading">Tablets By Brand</h3>
      <div className="items">
        {tab.map((mobile) => {
          return (
            <Brand imageUrl={mobile.brandLogo} name={mobile.brandName} />
          );
        })}
      </div>
    </div>
    )
  }
}
