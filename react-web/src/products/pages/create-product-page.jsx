import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveProduct } from "products/actions";
import CreateProduct from "products/components/create-product";

const CreateProductPage = (props) => (
  <div>
    <h1><FormattedMessage id="products.create.page.title" /></h1>
    <CreateProduct onSave={value => props.save(value)} />
  </div>
);

CreateProductPage.propTypes = {
  save: PropTypes.func,
}

const storeConnect = connect(
  () => ({}),
  dispatch => ({
    save: value => dispatch(saveProduct(value)),
  }),
);

export default storeConnect(CreateProductPage);