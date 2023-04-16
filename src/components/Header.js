import React, { Component } from "react";
import Logo from "./Header/Logo";
import Search from "./Header/Search";
import Login from "./Header/Login";
import Navbar from "./Navbar";



export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Logo />
          <div className="search-login">
            <Search />
            <Login />
          </div>
        </div>
        <Navbar />
     
      </div>
    );
  }
}
