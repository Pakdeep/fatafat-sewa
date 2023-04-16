import React, { Component } from "react";
import { UilShoppingCartAlt } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfItems: [1, 2, 3] };
  }
  render() {
    return (
      <div className="right">
        <Link to="/login" className="sign-in">
          <div className="inside">
            Sign In <UilUser />
          </div>
        </Link>
        <Link to="/cart" className="cart">
          <div className="inside">
            {" "}
            Cart <UilShoppingCartAlt />
          </div>
          <div className="cartNum">
            <p>{this.state.numberOfItems.length}</p>
          </div>
        </Link>
      </div>
    );
  }
}
