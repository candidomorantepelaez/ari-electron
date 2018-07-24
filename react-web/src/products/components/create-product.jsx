import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import createProductForm from "products/forms/create-product-form";

const CreateClient = ({ onSave }) => (
  <Form
    actions={createProductForm.actions}
    onSubmit={value => onSave(value)}
    fields={createProductForm.fields}
  />
);

CreateClient.propTypes = {
  onSave: PropTypes.func,
};

export default CreateClient;