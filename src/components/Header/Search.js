import React, { Component } from "react";
import { UilSearch } from "@iconscout/react-unicons";

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar center">
        <form action="" className="search">
          <input type="text" name="items" id="items" placeholder="What are you looking for?" />
          <label htmlFor="items">
            <UilSearch />
          </label>
        </form>
      </div>
    );
  }
}
