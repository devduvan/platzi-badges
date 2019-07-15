import React from "react";

import "./styles/badgesList.css";

import { Link } from "react-router-dom";

import Gravatar from "../components/gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return [query, setQuery, filteredBadges];
}

function BadgesList(props) {
  const badges = props.badges;
  const [query, setQuery, filteredBadges] = useSearchBadges(badges);

  const searchBar = (
    <div className="form-group">
      <label htmlFor="">Filter badges</label>
      <input
        type="text"
        className="form-control"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
    </div>
  );
  if (!filteredBadges || (filteredBadges && filteredBadges.length <= 0)) {
    return (
      <div>
        {searchBar}
        <h3>Not found results for your query</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="Badges__list">
      {searchBar}
      <div className="list-unstyled">
        {filteredBadges.map(badge => {
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
    </div>
  );
}

export default BadgesList;
