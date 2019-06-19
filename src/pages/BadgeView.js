import React from "react";

import "./styles/badgeView.css";

import { Link } from "react-router-dom";

import confLogo from "../images/platziconf-logo.svg";
import api from "../api";
import PageLoading from "../components/pageLoading";
import PageError from "../components/pageError";
import Badge from "../components/badge";

class BadgeView extends React.Component {
  state = {
    loading: true,
    badge: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  componentDidMount() {
    this.fetchBadge();
  }

  fetchBadge = async e => {
    try {
      const badge = await api.badges.read(this.props.match.params.id);
      this.setState({ badge: badge });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    const badge = this.state.badge;

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
                  <Link
                    className="btn btn-primary mb-4"
                    to={`badges/${badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeView;
