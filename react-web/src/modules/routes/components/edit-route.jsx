import React from 'react';
import PropTypes from "prop-types";

const EditRoute = ({route, onEdit}) => (
  <p>editar ruta</p>
);

EditRoute.propTypes = {
  route: PropTypes.obj,
  onEdit: PropTypes.func,
};

export default EditRoute;
