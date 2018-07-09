import React from 'react';
import TarjetaDetalleProducto from './../../components/producto/tarjeta-detalle-producto';

const DetalleProductosPage = ({ match }) => (
  <div>
    <h3>Detalle Producto</h3>
    <TarjetaDetalleProducto id={match.params.id} />
  </div>
);

export default DetalleProductosPage;
