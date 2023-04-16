import React, { Component } from 'react'
import "../Sass/Brand.scss"
export default class Brand extends Component {
  render() {
    return (
        <div className='brand'>
        <div className="brandImage">
            <img src={this.props.imageUrl} alt="Image of brand" />
        </div>
        <h3>{this.props.name}</h3>        
      </div>
    )
  }
}
