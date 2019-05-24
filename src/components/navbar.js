import React from "react";

import { Link } from "react-router-dom";

import "./styles/navbar.css";
import logo from "../images/logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link className="Navbar__brand" to="/">
            <img className="Navbar__brand-logo" src={logo} alt="logo" />
            <span className="font-weight-medium">
              Conference <strong>badges</strong>
            </span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
