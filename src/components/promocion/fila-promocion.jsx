import React from "react";
import EliminarBotonIcono from "./../globals/buttons/eliminar-boton-icono";
import { Link } from "react-router-dom";

const FilaPromocion = ({ promocion, accion}) => (
  <tr>
    <th scope="row">{ promocion._id }</th>
    <td>{ promocion.nombre }</td>
    <td>{ promocion.descripcion }</td>
    <td>{ promocion.precio }</td>
    <td>
      <Link to={"/promociones/mostrar/"+promocion._id}><span className="fas fa-address-card icono"></span></Link>
      <Link to={"/promociones/editar/"+promocion._id}><span className="fas fa-edit icono"></span></Link>
      <EliminarBotonIcono titulo="Eliminar Promocion" texto="Seguro que desea borrar la Promocion?" id={ promocion._id } accion={(value) => accion(value)} />
    </td>
  </tr>
);

export default FilaPromocion;
