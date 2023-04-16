import React, { Component } from "react";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagramAlt } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    const time = new Date();
    const year = time.getFullYear();
    return (
      <div className="footer">
        <div className="footerFrow">
          <div className="footerImage">
            <Link to="/" className="imgimg">
                {" "}
                <img
                  className="img"
                  src="https://fatafatsewa.com/storage/uploads/images/settings/core/1667736091-2666.png"
                  alt=""
                />
            </Link>

            <div className="icons">
              <ul>
                <li>
                  <UilFacebook className="icon" />
                </li>
                <li>
                  <UilInstagramAlt className="icon" />
                </li>
                <li>
                  <UilTwitter className="icon" />
                </li>
                <li>
                  <UilLinkedin className="icon" />
                </li>
              </ul>
            </div>
          </div>
          <div className="information">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="http://">Location</a>
              </li>
              <li>
                <a href="http://">Terms & Condition</a>
              </li>
              <li>
                <a href="http://">Privacy Policy</a>
              </li>
              <li>
                <a href="http://">Return Policy</a>
              </li>
              <li>
                <a href="http://">Exchange Policy</a>
              </li>
              <li>
                <a href="http://">Cookies</a>
              </li>
            </ul>
          </div>
          <div className="quickLinks">
            <h3>Quick Links</h3>

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
          <div className="contact">
            <h3>Contact</h3>
            <div className="details">
              <p>Kalimati,Kathmandu</p>
              <p>9818040123</p>
              <p>
                <a href="mailto:jaiswalpak450@gmail.com">
                  jaiswalpak450@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <p>Developed by Deepak Jaiswal &copy;DeepJais{year}</p>
      </div>
    );
  }
}
