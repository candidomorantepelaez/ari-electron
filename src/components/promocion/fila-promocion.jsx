import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";

const FilaPromocion = ({ promocion, accion}) => (
  <tr>
    <td>{ promocion.nombre }</td>
    <td>{ promocion.descripcion }</td>
    <td>{ promocion.precio }</td>
    <td>
      <Link to={"/promociones/mostrar/"+promocion._id} data-toggle="tooltip" data-placement="top" title="Detalle del Registro" ><MdAccountBox className="icono" /></Link>
      <Link to={"/promociones/editar/"+promocion._id} data-toggle="tooltip" data-placement="top" title="Editar del Registro" ><FaEdit className="icono" /></Link>
      <EliminarBotonIcono titulo="Eliminar Promocion" texto="Seguro que desea borrar la Promocion?" id={ promocion._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaPromocion;
