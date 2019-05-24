import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/platziconf-logo.svg";
import astronauts from "../images/astronauts.svg";
import "./styles/Home.css";

function Home(props) {
  return (
    <div className="Home">
      <div className="container">
        <div className="row">
          <div className="Home__col col col-12 col-md-4">
            <img src={logo} alt="logo" className="img-fluid mb-2" />
            <h3 className="Home__title">PRINT YOUR BADGES</h3>
            <p className="Home__description">
              The easiest way to manage your conference
            </p>
            <Link to="/badges" className="btn btn-primary">
              Start now
            </Link>
          </div>
          <div className="Home__col d-none d-md-block col-md-8">
            <img src={astronauts} alt="" className="img-fluid p-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
