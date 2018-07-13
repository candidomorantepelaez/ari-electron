import React from 'react';
import PropTypes from "prop-types";
import { Form } from "informed";
import TextField from "core/application/components/forms/fields/text-field";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import VolverButton from "core/application/components/forms/buttons/back-button";

const CreateRoute = ({onSave}) => (
  <Form
    autoComplete="false"
    noValidate="true"
    onSubmit={value => onSave(value)}
  >
    {({formState}) => (
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <fieldset className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <TextField
                field="nombre"
                label="routes.field.name"
                css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                errors={formState.errors.nombre}
                required
                />
              <TextField
                field="dia"
                label="routes.field.day"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                errors={formState.errors.dia}
                required
                />
              <TextField
                field="franjaHoraria"
                label="routes.field.time.range"
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                errors={formState.errors.franjaHoraria}
                required
                />
            </div>
        </fieldset>
        <SubmitButton />
        <VolverButton />
      </div>
    )}
  </Form>
);

CreateRoute.propTypes = {
  onSave: PropTypes.func,
};

export default CreateRoute;
