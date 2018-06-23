import React from 'react';
import FormularioEdicionPromocion from "./../../components/promocion/formulario-edicion-promocion";

const EdicionPromocionesPage = ({ match }) => (
  <div>
    <h3>Editar la Promocion</h3>
    <FormularioEdicionPromocion id={match.params.id} />
  </div>
);

export default EdicionPromocionesPage;
