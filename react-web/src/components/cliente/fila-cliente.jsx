import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";
import { Link } from "react-router-dom";

const FilaCliente = ({ cliente, accion}) => (
  <tr>
    <td>{ cliente.nombre }</td>
    <td>{ cliente.ruta.nombre }</td>
    <td>{ cliente.numeroBotellas }</td>
    <td>
      <Link to={"/clientes/mostrar/"+cliente._id} data-toggle="tooltip" data-placement="top" title="Detalle del Registro" ><MdAccountBox className="icono" /></Link>
      <Link to={"/clientes/editar/"+cliente._id} data-toggle="tooltip" data-placement="top" title="Editar del Registro" ><FaEdit className="icono" /></Link>
      <EliminarBotonIcono titulo="Eliminar Cliente" texto="Seguro que desea borrar el Cliente?" id={ cliente._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaCliente;
