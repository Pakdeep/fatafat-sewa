import React, { Component } from 'react'

export default class Scroller extends Component {
  render() {
    return (
        <div className='slider'>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
  <ol className="carousel-indicators ">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner"> 
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://f.nooncdn.com/mpcms/EN0001/assets/8d6c3a8a-f887-4ccb-bf68-779789e25120.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://f.nooncdn.com/mpcms/EN0001/assets/621eb56c-cd88-4ee9-a9e0-c14aeb382bf0.jpg" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://f.nooncdn.com/mpcms/EN0001/assets/3565e4f6-540e-4a2c-8f34-c82244a2a4e0.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon " aria-hidden="true"></span>
    <span className="sr-only ">Next</span>
  </a>
</div>
</div>
    )
  }
}
