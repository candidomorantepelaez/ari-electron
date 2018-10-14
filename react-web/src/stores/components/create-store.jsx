import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Form from "core/application/components/forms/form";
import createClientForm from "clients/forms/create-client-form";
import { isNil, map } from "ramda";

const CreateStore = ({ sellers, onSave, intl }) => (
  <Form
    actions={createStoreForm.actions}
    onSubmit={value => onSave(value)}
    fields={createStoreForm.fields}
    initialValue={{ sellers: (isEmpty(sellers)) ? null : sellers[0]._id }}
    options={{
      ruta: map(obj => ({ label: obj.nombre, value: obj._id }), routes),
    }}
  />
);

CreateStore.propTypes = {
  sellers: PropTypes.array,
  onSave: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(CreateStore);
