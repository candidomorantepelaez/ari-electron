import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const VolverButton = (props) => (
  <Link
    className="btn btn-secondary btn-sm boton-tarjeta" 
    to={props.ruta}
  >
    Volver
  </Link>
);

VolverButton.propTypes = {
  ruta: PropTypes.string,
}

export default VolverButton;
