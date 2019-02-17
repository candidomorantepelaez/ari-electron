import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ListRoutes from "routes/components/list-routes";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { deleteRoute, searchRoutes } from "routes/actions";
import { getRoutes, getSearchingRoutes } from "routes/reducers/search-routes-reducer";

class ListRoutesPage extends Component {
  static propTypes = {
    routes: PropTypes.array,
    searchingRoutes: PropTypes.bool,
    search: PropTypes.func,
    removeRoute: PropTypes.func,
  };

  constructor(props){
    super(props);
    this.props.search();
  }

  render() {

    if (this.props.searchingRoutes === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="routes.list.page.title" /></h3>
        <ListRoutes
          routes={this.props.routes}
          onDelete={value => this.props.removeRoute(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    routes: getRoutes(state),
    searchingRoutes: getSearchingRoutes(state),
  }),
  dispatch => ({
    search: () => dispatch(searchRoutes()),
    removeRoute: (id) => dispatch(deleteRoute(id)),
  })
);

export default storeConnect(ListRoutesPage);
