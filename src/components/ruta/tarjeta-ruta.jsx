import React from "react";

const TarjetaRuta = ({ ruta }) => (
  <div className="col-md-12">
  <div className="card tarjeta">
    <div className="card-header">
      {ruta.nombre}
    </div>
    <div className="card-body">
      <h3>Datos de la Ruta</h3>
      <p className="card-text">
        Franja Hoararia: {ruta.franjaHoraria}
      </p>
      <p className="card-text">
        Dia: {ruta.dia}
      </p>
    </div>
  </div>
  </div>
);

export default TarjetaRuta;
