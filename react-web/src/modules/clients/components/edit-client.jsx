import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Form from "core/application/components/forms/form";
import createClientForm from "clients/forms/create-client-form";
import { map } from "ramda";

const EditClient = ({intl, client, onEdit, routes}) => (
  <Form
    actions={createClientForm.actions}
    onSubmit={value => onEdit(value)}
    fields={createClientForm.fields}
    initialValue={client}
    options={{
      muestra: [
        { value: true, label: intl.formatMessage({ id: "core.yes" }) },
        { value: false, label: intl.formatMessage({ id: "core.no" }) }
      ],
      ruta: map(obj => ({ label: obj.nombre, value: obj._id }), routes),
    }}
  />
);

EditClient.propTypes = {
  intl: intlShape.isRequired,
  client: PropTypes.object,
  onEdit: PropTypes.func,
  routes: PropTypes.array,
};

export default injectIntl(EditClient);
