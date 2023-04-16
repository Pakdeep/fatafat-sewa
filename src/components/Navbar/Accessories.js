import React, { Component } from 'react'
import "../Sass/Accessories.scss"
import hardwares from './allItems/allHardwares';
import Brand from './Brand';

export default class Accessories extends Component {
  render() {
    return (
      <div className="itemContainer">
      <h3 className="heading">Cameras By Brand</h3>
      <div className="items">
        {hardwares.map((hardware) => {
          return (
            <Brand imageUrl={hardware.brandLogo} name={hardware.brandName} />
          );
        })}
      </div>
    </div>
    )
  }
}
