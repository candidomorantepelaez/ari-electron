import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getProducto, getBuscandoProducto } from "./../../reducers/producto/buscar-producto";
import { buscarProducto } from "./../../thunks/producto/buscar-producto";
import { borrarProductos } from "./../../thunks/producto/borrar-producto";
import { connect } from "react-redux";
import TarjetaProducto from "./tarjeta-producto";
import VolverButton from './../../components/globals/buttons/volver-button';
import EliminarBotonIcono from "./../../components/globals/buttons/eliminar-boton-icono";

class TarjetaDetalleProducto extends Component {
  static propTypes = {
    buscar: PropTypes.func,
    producto: PropTypes.object,
    cargando: PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.props.buscar(this.props.id);
  }

  render() {
    return (
      (this.props.cargando === true)
      ?
       <p>cargando...</p>
      :
      <div className="row">
        <TarjetaProducto
          producto={this.props.producto}
        />
        <Link
          className="btn btn-primary boton-tarjeta"
          to={"/productos/editar/"+this.props.producto._id}
        >
          Editar
        </Link>
        <EliminarBotonIcono
          boton
          titulo="Eliminar Producto"
          texto="Seguro que desea borrar el Producto?"
          id={this.props.producto._id}
          accion={(value) => this.props.eliminar(value) }
        />
        <VolverButton
          ruta="/productos"
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    producto: getProducto(state),
    cargando: getBuscandoProducto(state),
  }),
  dispatch => ({
    buscar: (id) => dispatch(buscarProducto(id)),
    eliminar: (id) => dispatch(borrarProductos(id)),
  })
);

export default storeConnect(TarjetaDetalleProducto);