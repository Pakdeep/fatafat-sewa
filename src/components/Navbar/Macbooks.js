import React, { Component } from 'react'
import "../Sass/Item.scss"
import macs from './allItems/allMacbooks';
import Brand from './Brand';

export default class Macbooks extends Component {
  render() {
    return (
      <div className="itemContainer">
      <h3 className="heading">Macbooks By Brand</h3>
      <div className="items">
        {macs.map((mac) => {
          return (
            <Brand imageUrl={mac.brandLogo} name={mac.brandName} />
          );
        })}
      </div>
    </div>
    )
  }
}
