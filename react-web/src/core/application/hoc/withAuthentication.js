import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUser } from "core/application/reducers/login-reducer";
import { defaultTo } from "ramda";
import LoginPage from "core/application/pages/login/login-page";
import { FormattedMessage } from "react-intl";

function withAuthentication(WrappedComponent, options) {
  const storeConnect = connect(
    state => ({
      currentUser: getCurrentUser(state),
    }),
    () => ({})
  );

  return storeConnect(class extends Component {
    static propsTypes = {
      currentUser: PropTypes.object,
    }

    constructor(props) {
      super(props);
      this.getReturn = this.getReturn.bind(this);
    }

    getReturn() {
      if (options.onFalse === "login") {
        return (<LoginPage />);
      }
      if (options.onFalse === "text") {
        return (<p><FormattedMessage id="core.authentication.unauthorized" /></p>);
      }
      return null;
    }

    render() {
      if (defaultTo("")(options.role) === this.props.currentUser.role) {
        return <WrappedComponent currentUser={this.props.currentUser} {...this.props} />;
      }
      return this.getReturn();
    }
  });
}

export default withAuthentication;