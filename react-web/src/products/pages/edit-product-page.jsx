import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearchingProduct, getProduct } from "products/reducers/search-product-reducer";
import { searchProduct, editProduct } from "products/actions";
import EditProduct from "products/components/edit-product";

class EditProductPage extends Component {
  static propTypes = {
    getSearchProduct: PropTypes.func,
    loadingProduct: PropTypes.bool,
    product: PropTypes.object,
    match: PropTypes.object,
    getEditProduct: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props.getSearchProduct(this.props.match.params.id);
  }

  render() {
    if (this.props.loadingProduct === true) {
      return (<LoadingIcon />);
    }

    return (
      <div>
        <h1><FormattedMessage id="products.detail.page.title" /></h1>
        <EditProduct
          product={this.props.product}
          onEdit={value => this.props.getEditProduct(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    product: getProduct(state),
    loadingProduct: getSearchingProduct(state),
  }),
  dispatch => ({
    getSearchProduct: id => dispatch(searchProduct(id)),
    getEditProduct: value => dispatch(editProduct(value)),
  }),
);

export default storeConnect(EditProductPage);
