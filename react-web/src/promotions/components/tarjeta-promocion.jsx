import React from "react";

const TarjetaPromocion = ({ promocion }) => (
  <div className="col-md-12">
  <div className="card tarjeta">
    <div className="card-header">
      {promocion.nombre}
    </div>
    <div className="card-body">
      <h3>Detalles de la promocion</h3>
      <p className="card-text">
        Descripcion: {promocion.descripcion}
      </p>
      <p className="card-text">
        precio: {promocion.precio}
      </p>
    </div>
  </div>
  </div>
);

export default TarjetaPromocion;
