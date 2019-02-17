import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import withAuthentication from "core/application/hoc/withAuthentication";

class CreateStorePage extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
  }

  constructor(props) {
    super(props);
    console.log("hola");
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="stores.create.page.title" /></h1>
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({

  }),
);

export default withAuthentication(storeConnect(CreateStorePage), { role: "ADMIN_ROLE" });
