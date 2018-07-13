import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import EditRoute from "routes/components/edit-route";
import { getRoute, getSearching } from "routes/reducers/search-route-reducer";
import { searchRoute, editRoute } from "routes/actions";

class EditRoutePage extends Component {
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
        <h3><FormattedMessage id="routes.edit.page.title" /></h3>
        <EditRoute
          route={this.props.route}
          onEdit={id => this.props.getEditRoute(id)}
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
    getEditRoute: (id) => dispatch(editRoute(id)),
  }),
);

export default storeConnect(EditRoutePage);
