import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ListSales from "sales/components/list-sales";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { deleteSale, searchSales } from "sales/actions";
import { getSales, getSearchingSales } from "sales/reducers/search-sales-reducer";

class ListSalesPage extends Component {
  static propTypes = {
    sales: PropTypes.array,
    searchingSales: PropTypes.bool,
    search: PropTypes.func,
    removeSale: PropTypes.func,
  };

  constructor(props){
    super(props);
    this.props.search();
  }

  render() {

    if (this.props.searchingSales === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="sales.list.page.title" /></h3>
        <ListSales
          sales={this.props.sales}
          onDelete={value => this.props.removeSale(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    sales: getSales(state),
    searchingSales: getSearchingSales(state),
  }),
  dispatch => ({
    search: () => dispatch(searchSales()),
    removeSale: (id) => dispatch(deleteSale(id)),
  })
);

export default storeConnect(ListSalesPage);