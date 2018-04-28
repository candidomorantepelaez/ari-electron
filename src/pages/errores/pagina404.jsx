import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagina404 extends Component {  
	render() {
		return (
      <div className="Pagina404">
        <h3>Contenido no encontrado</h3>
        <p>Intentelo de nuevo...</p>
        <Link class="btn btn-info" to="/">Inicio</Link>				
      </div>
		);
  }
}

export default Pagina404;
