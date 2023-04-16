import React, { Component } from 'react'
import "../Sass/Item.scss"
import lap from "./allItems/allLaptops"
import Brand from './Brand';

export default class Laptops extends Component {
  render() {
    return (
      <div className="itemContainer">
      <h3 className="heading">Laptops By Brand</h3>
      <div className="items">
        {lap.map((laptop) => {
          return (
            <Brand imageUrl={laptop.brandLogo} name={laptop.brandName} />
          );
        })}
      </div>
    </div>
    )
  }
}
