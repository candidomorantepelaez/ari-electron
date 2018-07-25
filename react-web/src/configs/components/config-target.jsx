import React  from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const ConfigTarget = ({ config }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {config.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">
          <FormattedMessage id="configs.field.dni" />: {config.cif}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.telefono" />: {config.telefono}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.email" />: {config.email}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.web" />: {config.web}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.direction.street" />: {config.calle}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.direction.square" />: {config.calle}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.direction.city" />: {config.poblacion}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.direction.state" />: {config.provincia}
        </p>
        <p className="card-text">
          <FormattedMessage id="configs.field.direction.codpostal" />: {config.codigoPostal}
        </p>
      </div>
    </div>
  </div>
);

ConfigTarget.propTypes = {
  config: PropTypes.object,
};

export default ConfigTarget;
