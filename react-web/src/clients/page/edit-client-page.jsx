import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearchingClient, getClient } from "clients/reducers/search-client-reducer";
import { searchClient, editClient } from "clients/actions";
import EditClient from "clients/components/edit-client";
import { getRoutes, getSearchingRoutes } from 'routes/reducers/search-routes-reducer';
import { searchRoutes } from "routes/actions";

class EditClientPage extends Component {
  static propTypes = {
    getSearchClient: PropTypes.func,
    loadingClient: PropTypes.bool,
    client: PropTypes.object,
    match: PropTypes.object,
    getSearchRoutes: PropTypes.func,
    loadingRoutes: PropTypes.bool,
    routes: PropTypes.array,
    getEditClient: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props.getSearchClient(this.props.match.params.id);
    this.props.getSearchRoutes();
  }

  render() {
    if (this.props.loadingClient === true || this.props.loadingRoutes === true) {
      return (<LoadingIcon />);
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.detail.page.title" /></h1>
        <EditClient
          client={this.props.client}
          onEdit={value => this.props.getEditClient(value)}
          routes={this.props.routes}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    client: getClient(state),
    loadingClient: getSearchingClient(state),
    loadingRoutes: getSearchingRoutes(state),
    routes: getRoutes(state),
  }),
  dispatch => ({
    getSearchClient: id => dispatch(searchClient(id)),
    getEditClient: value => dispatch(editClient(value)),
    getSearchRoutes: () => dispatch(searchRoutes()),
  }),
);

export default storeConnect(EditClientPage);
