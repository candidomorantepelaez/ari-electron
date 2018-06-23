import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";

const FilaVenta = ({ venta, accion}) => (
  <tr>
    <td>{ venta.fecha }</td>
    <td>{ venta.cliente }</td>
    <td>{ venta.importe }</td>
    <td>
      <Link to={"/ventas/mostrar/"+venta._id} data-toggle="tooltip" data-placement="top" title="Detalle del Registro" ><MdAccountBox className="icono" /></Link>
      <Link to={"/ventas/editar/"+venta._id} data-toggle="tooltip" data-placement="top" title="Editar del Registro" ><FaEdit className="icono" /></Link>
      <EliminarBotonIcono titulo="Eliminar Venta" texto="Seguro que desea borrar la venta?" id={ venta._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaVenta;
