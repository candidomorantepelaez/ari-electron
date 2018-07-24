import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const ProductFile = ({ product, action, intl}) => (
  <tr>
    <td>{ product.codigo }</td>
    <td>{ product.nombre }</td>
    <td>{ product.precio }</td>
    <td>{ product.iva }</td>
    <td>
      <DetailActionIcon
        path={"/products/detail/"+product._id}
      />
      <EditActionIcon
        path={"/products/edit/"+product._id}
      />
      <DeleteActionIcon
        title="products.action.confirm.delete.title"
        text="products.action.confirm.delete.text"
        id={ product._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
);

ProductFile.propTypes = {
  product: PropTypes.object,
  action: PropTypes.func,
}

export default ProductFile;