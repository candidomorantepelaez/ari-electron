import React from "react";
import PropTypes from "prop-types";
import EditButton from "core/application/components/forms/buttons/edit-button";
import BackButton from "core/application/components/forms/buttons/back-button";
import DeleteButton from "core/application/components/forms/buttons/delete-button";
import ProductTarget from "products/components/product-target";

const DetailProduct = ({product, onRemove}) => (
  <div className="row">
    <ProductTarget
      product={product}
    />
    <EditButton
      path={"/products/edit/"+product._id}
    />
    <DeleteButton
      title="products.action.confirm.delete.title"
      text="products.action.confirm.delete.text"
      id={ product._id }
      action={value => onRemove(value)}
    />
    <BackButton />
  </div>
);

DetailProduct.propTypes = {
  product: PropTypes.object,
  onRemove: PropTypes.func,
}

export default DetailProduct;
