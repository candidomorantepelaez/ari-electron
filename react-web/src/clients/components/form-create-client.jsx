import React from "react";
import { map } from "ramda";
import PropTypes from "prop-types";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { Form } from "informed";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import TextField from "core/application/components/forms/fields/text-field";
import SelectField from "core/application/components/forms/fields/select-field";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import VolverButton from "core/application/components/forms/buttons/back-button";



const FormCreateClient = ({ loading, routes, onSave, intl }) => (
  (loading === true) ?
    <LoadingIcon />
    :
    <Form
      autoComplete="false"
      noValidate="true"
      onSubmit={value => onSave(value)}
    >
      {({formState}) => (
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <fieldset className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <legend className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <FormattedMessage id="clients.field.legend.data" />
              </legend>
              <hr/>
              <div className="row">
                <TextField
                  field="nombre"
                  label="clients.field.name"
                  css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                  required
                  errors={formState.errors.nombre}
                />
                <TextField
                  field="cif"
                  label="clients.field.dni"
                  css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  required
                  errors={formState.errors.cif}
                />
                <TextField
                  field="telefono"
                  label="clients.field.telefono"
                  css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  required
                  errors={formState.errors.telefono}
                />
                <TextField
                  field="email"
                  label="clients.field.email"
                  css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                  required
                  errors={formState.errors.email}
                />
              </div>
          </fieldset>
          <fieldset className="col-12">
            <legend className="col-12">
              <FormattedMessage id="clients.field.legend.direction" />
            </legend>
            <hr/>
            <div className="row">
              <TextField
                field="calle"
                label="clients.field.direction.street"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.calle}
              />
              <TextField
                field="poblacion"
                label="clients.field.direction.city"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.poblacion}
              />
              <TextField
                field="provincia"
                label="clients.field.direction.state"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                errors={formState.errors.provincia}
              />
              <TextField
                field="codigoPostal"
                label="clients.field.direction.codpostal"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.codigoPostal}
              />
            </div>
          </fieldset>
          <fieldset className="col-12">
            <legend className="col-12">
              <FormattedMessage id="clients.field.legend.service" />
            </legend>
            <hr/>
            <div className="row">
              <SelectField
                field="muestra"
                label="clients.field.service.demo"
                options={[
                  { value: true, label: intl.formatMessage({ id: "core.yes" }) },
                  { value: false, label: intl.formatMessage({ id: "core.no" }) }
                ]}
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.muestra}
              />
              <TextField
                field="numeroBotellas"
                label="clients.field.service.bottles"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.numeroBotellas}
              />
              <SelectField
                field="ruta"
                label="clients.field.service.route"
                options={map(obj => ({ label: obj.nombre, value: obj._id }), routes)}
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                required
                errors={formState.errors.ruta}
              />
            </div>
          </fieldset>
          <SubmitButton />
          <VolverButton />
        </div>
      )}
    </Form>
);

FormCreateClient.propTypes = {
  routes: PropTypes.array,
  onSave: PropTypes.func,
  loading: PropTypes.bool,
  intl: intlShape.isRequired,
};

export default injectIntl(FormCreateClient);
