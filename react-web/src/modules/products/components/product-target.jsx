import React  from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const ProductTarget = ({ product }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {product.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">
          <FormattedMessage id="products.field.code" />: {product.codigo}
        </p>
        <p className="card-text">
          <FormattedMessage id="products.field.price" />: {product.precio}
        </p>
        <p className="card-text">
          <FormattedMessage id="products.field.iva" />: {product.iva}
        </p>
        <p className="card-text">
          <FormattedMessage id="products.field.description" />: {product.descripcion}
        </p>
      </div>
    </div>
  </div>
);

ProductTarget.propTypes = {
  product: PropTypes.object,
};

export default ProductTarget;
