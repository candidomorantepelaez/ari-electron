import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveClient } from "clients/actions";
import CreateClient from "clients/components/create-client";
import { getRoutes, getSearchingRoutes } from "routes/reducers/search-routes-reducer";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { searchRoutes } from "routes/actions";
class CreateClientPage extends Component {
  static propTypes = {
    save: PropTypes.func,
    getSearchRoutes: PropTypes.func,
    loading: PropTypes.bool,
    routes: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.props.getSearchRoutes();
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.create.page.title" /></h1>
        <CreateClient
          routes={this.props.routes}
          onSave={value => this.props.save(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    routes: getRoutes(state),
    loading: getSearchingRoutes(state),
  }),
  dispatch => ({
    getSearchRoutes: () => dispatch(searchRoutes()),
    save: client => dispatch(saveClient(client)),
  }),
);

export default storeConnect(CreateClientPage);
