import React from "react";

import "./styles/badgeNew.css";

import Badge from "../components/badge";
import BadgeForm from "../components/badgeForm";

import header from "../images/badge-header.svg";

class BadgeNew extends React.Component {
  state = {
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

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt="logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                avatarUrl="https://s.gravatar.com/avatar/c72624036257637bcd9c9efc6fea9c38?s=80"
              />
            </div>
            <div className="col col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
