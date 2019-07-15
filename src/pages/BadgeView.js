import React from "react";
import { Link } from "react-router-dom";

import "./styles/badgeView.css";

import confLogo from "../images/platziconf-logo.svg";
import Badge from "../components/badge";
import DeleteBadgeModal from "../components/deleteBadgeModal";

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeView(props) {
  const [count, setCount] = useIncreaseCount(4);
  const badge = props.badge;
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>{`${badge.firstName} ${badge.lastName}`}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              email={badge.email}
            />
          </div>
          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => {
                    setCount(count + 1);
                  }}
                >
                  Increase count: {count}
                </button>
                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>
              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeView;
