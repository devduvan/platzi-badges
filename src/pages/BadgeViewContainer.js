import React from "react";
import api from "../api";
import PageLoading from "../components/pageLoading";
import PageError from "../components/pageError";
import BadgeView from "./BadgeView";

class BadgeViewContainer extends React.Component {
  state = {
    loading: true,
    badge: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    },
    modalIsOpen: false
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

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });

    try {
      await api.badges.remove(this.props.match.params.id);

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  handleOpenModal = e => {
    console.log("handle open");
    this.setState({
      modalIsOpen: true
    });
  };

  handleCloseModal = e => {
    console.log("handle close");
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <BadgeView
        badge={this.state.badge}
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        onDeleteBadge={this.handleDeleteBadge}
        modalIsOpen={this.state.modalIsOpen}
      />
    );
  }
}

export default BadgeViewContainer;
