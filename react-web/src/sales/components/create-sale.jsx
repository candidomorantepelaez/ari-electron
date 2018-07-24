import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import createSaleForm from "sales/forms/create-sale-form";

const CreateSale = ({ onSave }) => (
  <Form
    actions={createSaleForm.actions}
    onSubmit={value => onSave(value)}
    fields={createSaleForm.fields}
  />
);

CreateSale.propTypes = {
  onSave: PropTypes.func,
};

export default CreateSale;
