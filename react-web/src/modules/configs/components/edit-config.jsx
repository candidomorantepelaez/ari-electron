import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import configForm from "configs/forms/config-form";

const EditConfig = ({config, onEdit}) => (
  <Form
    actions={configForm.actions}
    onSubmit={value => onEdit(value)}
    fields={configForm.fields}
    initialValue={config}
  />
);

EditConfig.propTypes = {
  config: PropTypes.object,
  onEdit: PropTypes.func,
};

export default EditConfig;
