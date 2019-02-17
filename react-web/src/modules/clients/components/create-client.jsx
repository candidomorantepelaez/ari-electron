import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import Form from "core/application/components/forms/form";
import createClientForm from "clients/forms/create-client-form";
import { isNil, map } from "ramda";

const CreateClient = ({ routes, onSave, intl }) => (
  <Form
    actions={createClientForm.actions}
    onSubmit={value => onSave(value)}
    fields={createClientForm.fields}
    initialValue={{ ruta: (isNil(routes[0]))? null : routes[0]._id, muestra: "false" }}
    options={{
      muestra: [
        { value: true, label: intl.formatMessage({ id: "core.yes" }) },
        { value: false, label: intl.formatMessage({ id: "core.no" }) }
      ],
      ruta: map(obj => ({ label: obj.nombre, value: obj._id }), routes),
    }}
  />
);

CreateClient.propTypes = {
  routes: PropTypes.array,
  onSave: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(CreateClient);
