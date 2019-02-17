import React  from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { isNil } from "ramda";

const ClientTarget = ({ client }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {client.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">
          <FormattedMessage id="clients.field.dni" />: {client.cif}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.telefono" />: {client.telefono}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.email" />: {client.email}
        </p>
        <h3><FormattedMessage id="clients.field.legend.direction" /></h3>
        <p className="card-text">
          <FormattedMessage id="clients.field.direction.street" />: {client.calle}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.direction.city" />: {client.poblacion}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.direction.state" />: {client.provincia}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.direction.codpostal" />: {client.codigoPostal}
        </p>
        <h3><FormattedMessage id="clients.field.legend.service" /></h3>
        <p className="card-text">
          <FormattedMessage id="clients.field.service.demo" />: {client.muestra}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.service.bottles" />: {client.numeroBotellas}
        </p>
        <p className="card-text">
          <FormattedMessage id="clients.field.service.route" />: {(isNil(client.ruta)) ? "" : client.ruta.nombre}
        </p>
      </div>
    </div>
  </div>
);

ClientTarget.propTypes = {
  client: PropTypes.object,
};

export default ClientTarget;
