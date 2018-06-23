import React from 'react';
import FormularioEdicionCliente from './../../components/cliente/formulario-edicion-cliente';

const EdicionClientesPage = ({ match }) => (
  <div>
    <h3>Edicion Cliente</h3>
    <FormularioEdicionCliente id={match.params.id} />
  </div>
);

export default EdicionClientesPage;
