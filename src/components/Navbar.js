import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        {/* <div className="categories">
          <select name="categories" id="categories">
            <option value="">All Categories</option>
            <option value="Home">Home</option>
            <option value="Mobiles">Mobiles</option>
            <option value="Laptops">Laptops</option>
            <option value="Accessories">Accessories</option>
            <option value="Camera">Cameras</option>
            <option value="Hardware">Hardwares</option>
            <option value="Tablets">Tablets</option>
            <option value="Macbook">Macbooks</option>
          </select>
        </div> */}
        <div className="collection">
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/mobiles">Mobiles</Link>
            </li>

            <li>
              {" "}
              <Link to="/laptops">Laptops</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/accessories">Accessories</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/cameras">Cameras</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/hardwares">Hardwares</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/macbooks">Macbooks</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tablets">Tablets</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
