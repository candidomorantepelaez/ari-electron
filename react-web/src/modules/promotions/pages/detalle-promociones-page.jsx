import React from 'react';
import TarjetaDetallePromocion from './../../components/promocion/tarjeta-detalle-promocion';

const DetallePromocionesPage = ({ match }) => (
  <div>
    <h3>Detalle de la Promocion</h3>
    <TarjetaDetallePromocion id={match.params.id} />
  </div>
);

export default DetallePromocionesPage;
