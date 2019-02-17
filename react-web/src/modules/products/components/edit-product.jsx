import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import createProductForm from "products/forms/create-product-form";

const EditProduct = ({product, onEdit}) => (
  <Form
    actions={createProductForm.actions}
    onSubmit={value => onEdit(value)}
    fields={createProductForm.fields}
    initialValue={product}
  />
);

EditProduct.propTypes = {
  product: PropTypes.object,
  onEdit: PropTypes.func,
};

export default EditProduct;
