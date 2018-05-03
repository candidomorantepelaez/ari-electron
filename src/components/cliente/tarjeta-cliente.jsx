import React from "react";

const TarjetaCliente = ({ cliente }) => (
  <div className="col-md-12">
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
    </div>
  </div>
  </div>
);

export default TarjetaCliente;
