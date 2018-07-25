import React from "react";
import PropTypes from "prop-types";
import Form from "core/application/components/forms/form";
import configForm from "configs/forms/config-form";

const CreateConfig = ({ onSave }) => (
  <Form
    actions={configForm.actions}
    onSubmit={value => onSave(value)}
    fields={configForm.fields}
  />
);

CreateConfig.propTypes = {
  onSave: PropTypes.func,
};

export default CreateConfig;