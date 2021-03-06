import React from "react";

import "./styles/badgeNew.css";

import Badge from "../components/badge";
import BadgeForm from "../components/badgeForm";
import PageLoading from "../components/pageLoading";

import header from "../images/platziconf-logo.svg";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    console.log("finciona!!!");
    e.preventDefault();

    this.setState({
      loading: true,
      error: null
    });

    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false
      });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            src={header}
            alt="logo"
            className="BadgeNew__hero-image img-fluid"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-6">
              <Badge
                firstName={this.state.form.firstName || "first name"}
                lastName={this.state.form.lastName || "last name"}
                jobTitle={this.state.form.jobTitle || "job title"}
                twitter={this.state.form.twitter || "@twitter"}
                email={this.state.form.email || "email"}
              />
            </div>
            <div className="col col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
