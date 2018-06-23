import React from 'react';
import { Link } from 'react-router-dom';

const Pagina404 = () => (
  <div className="Pagina404">
    <h3>Contenido no encontrado</h3>
    <p>Intentelo de nuevo...</p>
    <Link class="btn btn-info" to="/">Inicio</Link>
  </div>
);

export default Pagina404;
