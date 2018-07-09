import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";

const FilaProducto = ({ producto, accion}) => (
  <tr>
    <td>{ producto.codigo }</td>
    <td>{ producto.nombre }</td>
    <td>{ producto.precio }</td>
    <td>{ producto.iva }</td>
    <td>
      <Link to={"/productos/mostrar/"+producto._id} data-toggle="tooltip" data-placement="top" title="Detalle del Registro"><MdAccountBox className="icono" /></Link>
      <Link to={"/productos/editar/"+producto._id} data-toggle="tooltip" data-placement="top" title="Editar del Registro" ><FaEdit className="icono" /></Link>
      <EliminarBotonIcono titulo="Eliminar Producto" texto="Seguro que desea borrar el Producto?" id={ producto._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaProducto;
