import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Logo extends Component {
  render() {
    return (
      <div className="left logo">
        <Link to="/">
          <img
            src="https://fatafatsewa.com/storage/uploads/images/settings/core/1667736091-2666.png"
            alt="logo"
          />
        </Link>
      </div>
    );
  }
}
