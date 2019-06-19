import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesList from "../components/badgesList";
import PageLoading from "../components/pageLoading";
import PageError from "../components/pageError";
import MiniLoader from "../components/miniLoader";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ data: data });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} className="Badges_conf-logo" alt="" />
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />

            {this.state.loading && <MiniLoader />}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
