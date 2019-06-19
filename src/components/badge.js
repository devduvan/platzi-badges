import React from "react";
import confLogo from "../images/badge-header.svg";
import Gravatar from "../components/gravatar";
import "./styles/badge.css";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <Gravatar email={this.props.email} className="Badge__avatar" />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>{this.props.twitter}</div>
        </div>

        <div className="Badge__footer">#platziConf</div>
      </div>
    );
  }
}

export default Badge;
