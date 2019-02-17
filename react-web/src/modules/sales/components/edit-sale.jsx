import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import createSaleForm from "sales/forms/create-sale-form";

const EditSale = ({sale, onEdit}) => (
  <Form
    actions={createSaleForm.actions}
    onSubmit={value => onEdit(value)}
    fields={createSaleForm.fields}
    initialValue={sale}
  />
);

EditSale.propTypes = {
  sale: PropTypes.object,
  onEdit: PropTypes.func,
};

export default EditSale;
