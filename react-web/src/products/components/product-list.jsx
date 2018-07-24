import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import ProductFile from "products/components/product-file";
import { FormattedMessage } from 'react-intl';

const ProductList = ({list, searching, onRemove}) => (
  (searching === true) ?
    <p><FormattedMessage id="core.loading" /></p>
    :
    <div className="container">
      <div className="row">
        <LinkButtonBlock
          path="/products/new"
          text="products.link.new.product"
        />
      </div>
      <div className="row">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col"><FormattedMessage id="products.field.code" /></th>
              <th scope="col"><FormattedMessage id="products.field.name" /></th>
              <th scope="col"><FormattedMessage id="products.field.price" /></th>
              <th scope="col"><FormattedMessage id="products.field.iva" /></th>
              <th scope="col"><FormattedMessage id="core.actions" /></th>
            </tr>
          </thead>
          <tbody>
            { list.map((product, key) => (<ProductFile product={product} key={key} action={value => onRemove(value)} />)) }
          </tbody>
        </table>
      </div>
    </div>
);

ProductList.propTypes = {
  list: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default ProductList;
