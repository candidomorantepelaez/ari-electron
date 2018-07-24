import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearching, getSale } from "sales/reducers/search-sale-reducer";
import { searchSale, deleteSale } from "sales/actions";
import DetailSale from "sales/components/detail-sale";

class DetailSalePage extends Component {
  static propTypes = {
    getSearch: PropTypes.func,
    loading: PropTypes.bool,
    sale: PropTypes.object,
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.getSearch(this.props.match.params.id);
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="sales.detail.page.title" /></h1>
        <DetailSale
          sale={this.props.sale}
          onRemove={id => this.props.removeSale(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    sale: getSale(state),
    loading: getSearching(state),
  }),
  dispatch => ({
    getSearch: id => dispatch(searchSale(id)),
    removeSale: id => dispatch(deleteSale(id)),
  }),
);

export default storeConnect(DetailSalePage);
