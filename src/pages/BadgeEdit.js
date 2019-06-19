import React from "react";

import "./styles/badgeEdit.css";

import Badge from "../components/badge";
import BadgeForm from "../components/badgeForm";
import PageLoading from "../components/pageLoading";

import header from "../images/platziconf-logo.svg";
import api from "../api";

class BadgeEdit extends React.Component {
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

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const badge = await api.badges.read(this.props.match.params.id);
      this.setState({ form: badge });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ loading: false });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

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
      await api.badges.update(this.props.match.params.id, this.state.form);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        error: error
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            src={header}
            alt="logo"
            className="BadgeEdit__hero-image img-fluid"
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
              <h1>Edit Attendant</h1>
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

export default BadgeEdit;
