import React from "react";

const TarjetaProducto = ({ producto }) => (
  <div className="col-md-12">
  <div className="card tarjeta">
    <div className="card-header">
      {producto.nombre}
    </div>
    <div className="card-body">
      <p className="card-text">
        Descripcion: {producto.descripcion}
      </p>
      <p className="card-text">
        Codigo: {producto.codigo}
      </p>
      <p className="card-text">
        precio: {producto.precio}
      </p>
      <p className="card-text">
        iva: {producto.iva}
      </p>
    </div>
  </div>
  </div>
);

export default TarjetaProducto;
