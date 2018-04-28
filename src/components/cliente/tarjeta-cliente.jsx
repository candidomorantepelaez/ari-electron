import React from "react";
import { Link } from 'react-router-dom';

const TarjetaCliente = ({ cliente }) => (
  <div className="col-md-6">
  <div className="card tarjeta">
    <div className="card-header">
      {cliente.nombre}
    </div>
    <div className="card-body">
      <p className="card-text">
        Direccion: {cliente.direccion}
      </p>
      <p className="card-text">
        Ruta: {cliente.ruta}
      </p>
      <p className="card-text">
        Nº Botellas: {cliente.numeroBotellas}
      </p>
      <a
        href="/clientes"
        className="btn btn-primary btn-sm boton-tarjeta"
        role="button"
        aria-pressed="true"
      >
        Detalle
      </a>
      <Link
        to={"/clientes/editar/"+cliente._id}
        className="btn btn-secondary btn-sm boton-tarjeta"
        role="button"
        aria-pressed="true"
      >
        Editar
      </Link>
    </div>
  </div>
  </div>
);

export default TarjetaCliente;
