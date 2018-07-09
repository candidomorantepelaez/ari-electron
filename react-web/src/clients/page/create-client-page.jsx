import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveClient } from "clients/actions";
import FormCreateClient from "clients/components/form-create-client";

class CreateClientPage extends Component {
  static propTypes = {
    saveClient: PropTypes.func,
  }

  render() {
    return (
      <div>
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <FormCreateClient
          routes={this.props.routes}
          loading={this.props.loading}
          onSave={value => this.props.save(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    routes: [],
    loading: false,
  }),
  dispatch => ({
    save: (client) => dispatch(saveClient(client)),
  }),
);

export default storeConnect(CreateClientPage);
