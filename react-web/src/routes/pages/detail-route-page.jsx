import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import DetailRoute from "routes/components/detail-route";
import { getRoute, getSearching } from "routes/reducers/search-route-reducer";
import { searchRoute, deleteRoute } from "routes/actions";

class DetailRoutePage extends Component {
  static propTypes = {
    route: PropTypes.object,
    searching: PropTypes.bool,
    getRoute: PropTypes.func,
    removeRoute: PropTypes.func,
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.props.getRoute(this.props.match.params.id)
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="routes.detail.page.title" /></h3>
        <DetailRoute
          route={this.props.route}
          onDelete={id => this.props.removeRoute(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    route: getRoute(state),
    searching: getSearching(state),
  }),
  dispatch => ({
    getRoute: id => dispatch(searchRoute(id)),
    removeRoute: (id) => dispatch(deleteRoute(id)),
  }),
);

export default storeConnect(DetailRoutePage);
