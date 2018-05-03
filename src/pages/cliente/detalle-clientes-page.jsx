import React from 'react';
import TarjetaDetalleCliente from './../../components/cliente/tarjeta-detalle-cliente';

const CreacionClientesPage = ({ match }) => (
  <div>
    <h3>Crear Nuevo Cliente</h3>
    <TarjetaDetalleCliente id={match.params.id} />
  </div>
);

export default CreacionClientesPage;
