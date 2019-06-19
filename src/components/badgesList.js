import React from "react";

import "./styles/badgesList.css";

import { Link } from "react-router-dom";

import Gravatar from "../components/gravatar";

class BadgesList extends React.Component {
  render() {
    if (
      !this.props.badges ||
      (this.props.badges && this.props.badges.length <= 0)
    ) {
      return (
        <div>
          <h3>Not found results for your query</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="list-unstyled Badges__list">
        {this.props.badges.map(badge => {
          return (
            <li className="Badges__list-item" key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`badges/${badge.id}`}
              >
                <div className="row">
                  <div className="col col-3">
                    <Gravatar
                      email={badge.email}
                      className="Badges__list-item-avatar"
                    />
                  </div>
                  <div className="col col-9">
                    <p className="Badges__list-item-name">
                      {badge.firstName} {badge.lastName}
                    </p>
                    <p className="Badges__list-item-twitter">
                      @{badge.twitter}
                    </p>
                    <p className="Badges__list-item-jobTitle">
                      {badge.jobTitle}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
