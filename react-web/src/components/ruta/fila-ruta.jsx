import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";

const FilaRuta = ({ ruta, accion}) => (
  <tr>
    <td>{ ruta.dia }</td>
    <td>{ ruta.nombre }</td>
    <td>{ ruta.franjaHoraria }</td>
    <td>
      <Link to={"/rutas/mostrar/"+ruta._id} data-toggle="tooltip" data-placement="top" title="Detalle del Registro" ><MdAccountBox className="icono" /></Link>
      <Link to={"/rutas/editar/"+ruta._id} data-toggle="tooltip" data-placement="top" title="Editar del Registro" ><FaEdit className="icono" /></Link>
      <EliminarBotonIcono titulo="Eliminar Ruta" texto="Seguro que desea borrar la Ruta?" id={ ruta._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaRuta;
