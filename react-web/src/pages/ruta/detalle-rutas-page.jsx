import React from 'react';
import TarjetaDetalleRuta from "./../../components/ruta/tarjeta-detalle-ruta";

const DetalleRutasPage = ({ match }) => (
  <div>
    <h3>Detalle Ruta</h3>
    <TarjetaDetalleRuta id={match.params.id} />
  </div>
);

export default DetalleRutasPage;
