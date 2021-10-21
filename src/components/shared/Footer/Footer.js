import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-dark mt-4 p-5" id="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 border-end">
            <div className="p-3 text-center">
              <h4 className="text-white"> <span className="text-primary">RJ</span> Health Care</h4>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/review">Review</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 border-end">
            <div className="p-3 text-center">
              <h4 className="text-white">Online Support</h4>
              <ul>
                <li>
                  <Link to="">+0202020202</Link>
                </li>
                <li>
                  <Link to="">+0303030303</Link>
                </li>
                <li>
                  <Link to="">+0404040404</Link>
                </li>
                <li>
                  <Link to="">+0505050505</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 text-center">
              <h4 className="text-white">Follow Us</h4>
              <div>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faLinkedinIn} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faFacebookF} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faTwitter} className="faIcon" />
                </Link>
                <Link to="" className="d-block custom-icon-border">
                  <FontAwesomeIcon icon={faInstagram} className="faIcon" />
                </Link>
              </div>
            </div>
          </div>
          <hr className="text-white mt-4" />
          <div className="col-md-12">
            <p className="text-center text-white mt-4">
              All Right Reserved <span className="text-primary fw-bold">By RJ</span> Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// =========end==================
