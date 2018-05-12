import React from 'react';
import FormularioEdicionRuta from "./../../components/ruta/formulario-edicion-ruta";

const EdicionRutasPage = ({match}) => (
  <div>
    <h3>Edicion Ruta</h3>
    <FormularioEdicionRuta id={match.params.id} />
  </div>
);

export default EdicionRutasPage;
