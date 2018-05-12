import React from 'react';
import FormularioEdicionProducto from './../../components/producto/formulario-edicion-producto';

const EdicionProductosPage = ({ match }) => (
  <div>
    <h3>Edicion Producto</h3>
    <FormularioEdicionProducto id={match.params.id} />
  </div>
);

export default EdicionProductosPage;
