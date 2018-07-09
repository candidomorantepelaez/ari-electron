import React  from "react";
import PropTypes from "prop-types";

const TarjetaCliente = ({ cliente }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {cliente.nombre}
      </div>
      <div className="card-body">
        <h3>Datos Cliente</h3>
        <p className="card-text">
          Dni/Cif: {cliente.cif}
        </p>
        <p className="card-text">
          Telefono: {cliente.telefono}
        </p>
        <p className="card-text">
          Email: {cliente.email}
        </p>
        <h3>Direccion</h3>
        <p className="card-text">
          Calle: {cliente.calle}
        </p>
        <p className="card-text">
          Población: {cliente.poblacion}
        </p>
        <p className="card-text">
          Provincia: {cliente.provincia}
        </p>
        <p className="card-text">
          Cod. Postal: {cliente.codigoPostal}
        </p>
        <h3>Datos del Servicio</h3>
        <p className="card-text">
          Muestra: {cliente.muestra}
        </p>
        <p className="card-text">
          Nº Botellas: {cliente.numeroBotellas}
        </p>
        <p className="card-text">
          Ruta: {cliente.ruta.nombre}
        </p>
      </div>
    </div>
  </div>
);

TarjetaCliente.propTypes = {
  cliente: PropTypes.object,
};

export default TarjetaCliente;
