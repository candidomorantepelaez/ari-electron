import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearchingProduct, getProduct } from "products/reducers/search-product-reducer";
import { searchProduct, deleteProduct } from "products/actions";
import DetailProduct from "products/components/detail-product";

class DetailProductPage extends Component {
  static propTypes = {
    getSearchProduct: PropTypes.func,
    loading: PropTypes.bool,
    product: PropTypes.object,
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.getSearchProduct(this.props.match.params.id);
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="products.detail.page.title" /></h1>
        <DetailProduct
          product={this.props.product}
          onRemove={id => this.props.removeProduct(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    product: getProduct(state),
    loading: getSearchingProduct(state),
  }),
  dispatch => ({
    getSearchProduct: id => dispatch(searchProduct(id)),
    removeProduct: id => dispatch(deleteProduct(id)),
  }),
);

export default storeConnect(DetailProductPage);
