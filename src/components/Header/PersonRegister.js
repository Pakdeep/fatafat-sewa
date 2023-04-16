import React, { Component } from "react";
import { UilEye, UilEyeSlash} from '@iconscout/react-unicons'
import "./form.scss";
import { Link } from "react-router-dom";
import { UilInfo } from "@iconscout/react-unicons";
export default class PersonRegister extends Component {
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
      <div className="personRegister">
        <Link to="/" className="logo">
          <img
            src="https://fatafatsewa.com/storage/uploads/images/settings/core/1667736091-2666.png"
            alt="logo"
          />
        </Link>
        <div className="form">
          <form action="">
            <div className="labelInput">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name=""
                id="name"
                required
                autoComplete="off"
              />
            </div>
            <div className="labelInput">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name=""
                id="email"
                required
                autoComplete="off"
              />
            </div>
            <div className="labelInput">
              <label htmlFor="phno">Phone Number</label>
              <input
                type="text"
                name=""
                id="phno"
                required
                autoComplete="off"
              />
            </div>
            <div className="labelInput">
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="password" required />

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
              <div className="info">
                <UilInfo />
                <span>Password must be alteast 6 characters.</span>
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
          <div className="register">
            <h6>
              <span>-----------</span>Already have an Account
              <span>-----------</span>{" "}
            </h6>
            <Link to="/login" className="registerBtn">
              {" "}
              <button>Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
