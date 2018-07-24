import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ProductList from "products/components/product-list";
import { connect } from "react-redux";
import { searchProducts, deleteProduct } from "products/actions";
import { getSearchingProducts, getProducts } from "products/reducers/search-products-reducer";
import LoadingIcon from "core/application/components/iconos/loading-icon";

class ListProductsPage extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    products: PropTypes.array,
    getSearchProducts: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.getSearchProducts();
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="products.list.page.title" /></h3>
        <ProductList
          list={this.props.products}
          onRemove={value => this.props.onRemove(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    searching: getSearchingProducts(state),
    products: getProducts(state),
  }),
  dispatch => ({
    getSearchProducts: () => dispatch(searchProducts()),
    onRemove: (id) => dispatch(deleteProduct(id)),
  }),
);

export default storeConnect(ListProductsPage);