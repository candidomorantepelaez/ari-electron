import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import CreateClient from "clients/components/create-client";
import LoadingIcon from "core/application/components/iconos/loading-icon";


class CreateClientPage extends Component {
  static propTypes = {
    save: PropTypes.func,
    getSearchRoutes: PropTypes.func,
    loading: PropTypes.bool,
    routes: PropTypes.array,
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
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <CreateClient routes={this.props.routes} onSave={value => this.props.save(value)} />
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

export default storeConnect(CreateClientPage);
