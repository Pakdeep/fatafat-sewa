import React, { Component } from "react";
import Scroller from "./Scroller";
import Items2 from "./Items2";
import Items1 from "./Items1";

export default class Home extends Component {
  render() {
    
    return (
      <div>
        <Scroller />
        <Items1 />
        <Items2 />
      </div>
    );
  }
}
