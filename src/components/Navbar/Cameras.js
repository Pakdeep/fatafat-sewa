import React, { Component } from 'react'
import "../Sass/Item.scss"
import cam from './allItems/allCameras';
import Brand from './Brand';
export default class Cameras extends Component {
  render() {
    return (
      <div className="itemContainer">
      <h3 className="heading">Cameras By Brand</h3>
      <div className="items">
        {cam.map((mobile) => {
          return (
            <Brand imageUrl={mobile.brandLogo} name={mobile.brandName} />
          );
        })}
      </div>
    </div>
    )
  }
}
