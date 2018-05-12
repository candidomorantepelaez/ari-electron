import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";

const FilaRuta = ({ ruta, accion}) => (
  <tr>
    <th scope="row">{ ruta._id }</th>
    <td>{ ruta.dia }</td>
    <td>{ ruta.nombre }</td>
    <td>{ ruta.franjaHoraria }</td>
    <td>
      <Link to={"/rutas/mostrar/"+ruta._id}><span className="fas fa-address-card icono"></span></Link>
      <Link to={"/rutas/editar/"+ruta._id}><span className="fas fa-edit icono"></span></Link>
      <EliminarBotonIcono titulo="Eliminar Ruta" texto="Seguro que desea borrar la Ruta?" id={ ruta._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaRuta;
