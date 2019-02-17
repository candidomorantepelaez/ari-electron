import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getListingStores, getStores } from "stores/reducers/list-stores-reducer";
import { listStores, removeStore } from "stores/actions";
import withAuthentication from "core/application/hoc/withAuthentication";
import StoreList from "stores/components/store-list";

class ListStoresPage extends Component {
  static propTypes = {
    currentUser: PropTypes.object,
    loading: PropTypes.bool,
    stores: PropTypes.array,
    searchStores: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.searchStores();
  }

  render() {
    if (this.props.loading === true) {
      return (<LoadingIcon />);
    }
    return (
      <div>
        <h3><FormattedMessage id="stores.list.page.title" /></h3>
        <StoreList stores={this.props.stores} loading={this.props.loding} onRemove={id => this.props.remove(id)} />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    loading: getListingStores(state),
    stores: getStores(state),
  }),
  dispatch => ({
    searchStores: () => dispatch(listStores()),
    remove: (id) => dispatch(removeStore(id)),
  }),
);

export default withAuthentication(storeConnect(ListStoresPage), { role: "ADMIN_ROLE" });
