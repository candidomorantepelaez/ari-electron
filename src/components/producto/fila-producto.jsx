import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";

const FilaProducto = ({ producto, accion}) => (
  <tr>
    <th scope="row">{ producto._id }</th>
    <td>{ producto.codigo }</td>
    <td>{ producto.nombre }</td>
    <td>{ producto.descripcion }</td>
    <td>{ producto.precio }</td>
    <td>{ producto.iva }</td>
    <td>
      <Link to={"/productos/mostrar/"+producto._id}><span className="fas fa-address-card icono"></span></Link>
      <Link to={"/productos/editar/"+producto._id}><span className="fas fa-edit icono"></span></Link>
      <EliminarBotonIcono titulo="Eliminar Producto" texto="Seguro que desea borrar el Producto?" id={ producto._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaProducto;
