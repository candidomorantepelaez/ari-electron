import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ClientList from "clients/components/client-list";
import { connect } from "react-redux";
import { searchClientsWithRoute } from "clients/actions";
import { getSearchingClientsWithRoute,
  getClientsWithRoute } from "clients/reducers/search-clients-with-route-reducer";
import LoadingIcon from "core/application/components/iconos/loading-icon";

class ListClientsPage extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    clientsWithRoutes: PropTypes.array,
    getClients: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.getClients();
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="clients.list.page.title" /></h3>
        <ClientList
          list={this.props.clientsWithRoutes}
          searching={false}
          onRemove={() => console.log()}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    searching: getSearchingClientsWithRoute(state),
    clientsWithRoutes: getClientsWithRoute(state),
  }),
  dispatch => ({
    getClients: () => dispatch(searchClientsWithRoute()),
  }),
);

export default storeConnect(ListClientsPage);
