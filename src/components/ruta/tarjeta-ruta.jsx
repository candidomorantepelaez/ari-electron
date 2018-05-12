import React from "react";

const TarjetaRuta = ({ ruta }) => (
  <div className="col-md-12">
  <div className="card tarjeta">
    <div className="card-header">
      {ruta.nombre}
    </div>
    <div className="card-body">
      <p className="card-text">
        Franja Hoararia: {ruta.franjaHoraria}
      </p>
      <p className="card-text">
        Nº identificativo: {ruta._id}
      </p>
    </div>
  </div>
  </div>
);

export default TarjetaRuta;
