import React, { Component } from "react";
import { connect } from "react-redux";

export default OriginalComponent => {
  class MixedComponent extends Component {
    componentDidMount() {
      //whether the user is authenticated
      if (this.props.isAuth && this.props.jwtToken) {
        console.log("all is good, user entrance is allowed");
      } else {
        this.props.history.push("/");
      }
    }
    componentDidUpdate() {
      //Whether the user is authenticated
      if (this.props.isAuth && this.props.jwtToken) {
        console.log("All is good, user entrance is allowed");
      } else {
        this.props.history.push("/");
      }
    }
    render() {
      return <OriginalComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token
    };
  };

  return connect(mapStateToProps)(MixedComponent);
};
