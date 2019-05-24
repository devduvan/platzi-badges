import React from "react";

import "./styles/badgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="list-unstyled Badges__list">
        {this.props.badges.map(badge => {
          return (
            <li className="Badges__list-item" key={badge.id}>
              <div className="row">
                <div className="col col-3">
                  <img
                    className="Badges__list-item-avatar"
                    src={badge.avatarUrl}
                    alt=""
                  />
                </div>
                <div className="col col-9">
                  <p className="Badges__list-item-name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="Badges__list-item-twitter">@{badge.twitter}</p>
                  <p className="Badges__list-item-jobTitle">{badge.jobTitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default BadgesList;
