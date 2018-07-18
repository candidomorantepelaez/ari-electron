import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearchClientWithRoute, getClientWithRoute } from "clients/reducers/search-client-with-route-reducer";
import { searchClientWithRoute, deleteClient } from "clients/actions";
import DetailClient from "clients/components/detail-client";
class DetailClientPage extends Component {
  static propTypes = {
    getSearchClient: PropTypes.func,
    loading: PropTypes.bool,
    client: PropTypes.object,
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.getSearchClient(this.props.match.params.id);
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="clients.detail.page.title" /></h1>
        <DetailClient
          client={this.props.client}
          onRemove={id => this.props.removeClient(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    client: getClientWithRoute(state),
    loading: getSearchClientWithRoute(state),
  }),
  dispatch => ({
    getSearchClient: id => dispatch(searchClientWithRoute(id)),
    removeClient: id => dispatch(deleteClient(id)),
  }),
);

export default storeConnect(DetailClientPage);
