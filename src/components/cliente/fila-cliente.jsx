import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";

const FilaCliente = ({ cliente, accion}) => (
  <tr>
    <th scope="row">{ cliente._id }</th>
    <td>{ cliente.nombre }</td>
    <td>{ cliente.direccion }</td>
    <td>{ cliente.ruta }</td>
    <td>{ cliente.muestra }</td>
    <td>{ cliente.numeroBotellas }</td>
    <td>
      <Link to={"/clientes/mostrar/"+cliente._id}><span className="fas fa-address-card icono"></span></Link>
      <Link to={"/clientes/editar/"+cliente._id}><span className="fas fa-edit icono"></span></Link>
      <EliminarBotonIcono titulo="Eliminar Cliente" texto="Seguro que desea borrar el Cliente?" id={ cliente._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaCliente;
