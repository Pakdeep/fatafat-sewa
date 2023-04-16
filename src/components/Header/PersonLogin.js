import React, { Component } from "react";
import { UilEye, UilEyeSlash } from "@iconscout/react-unicons";

import "./form.scss";
import { Link } from "react-router-dom";
export default class PersonLogin extends Component {
  render() {
    const myFunction = () => {
      var x = document.getElementById("password");
      var y = document.getElementById("eyeSlash");
      if (x.type === "password") {
        x.type = "text";
        y.style.display = "block";
      } else {
        x.type = "password";
        y.style.display = "none";
      }
    };
    return (
      <div className="personLogin">
        <Link to="/" className="logo">
          <img
            src="https://fatafatsewa.com/storage/uploads/images/settings/core/1667736091-2666.png"
            alt="logo"
          />
        </Link>
        <div className="form">
          {" "}
          <form action="">
            <div className="labelInput">
              {" "}
              <input
                type="text"
                name=""
                id="name"
                required
                autoComplete="off"
              />
              <label htmlFor="name" required>
                Email or mobile phone number
              </label>
            </div>
            <div className="labelInput">
              {" "}
              <input
                type="password"
                name=""
                id="password"
                required
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
              <label
                htmlFor="showBtn"
                className="eyeBtn"
                id="eyeSlash"
                style={{
                  display: "none",
                }}
              >
                <UilEyeSlash />
              </label>
              <label htmlFor="showBtn" className="eyeBtn">
                <UilEye />
              </label>
              <input
                type="checkbox"
                onClick={myFunction}
                id="showBtn"
                style={{ display: "none" }}
              />
            </div>
            <button type="submit">Login</button>
            <h5>The T&C area</h5>
          </form>{" "}
          <div className="register">
            <h6>
              <span>-----------</span> New to FatafatSewa
              <span>-----------</span>{" "}
            </h6>
            <Link to="/register" className="registerBtn">
              {" "}
              <button>Create an Account</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
