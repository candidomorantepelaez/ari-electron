import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getClienteConRuta, getBuscandoClienteConRuta } from "./../../reducers/cliente/buscar-cliente-con-ruta";
import { buscarClienteConRuta } from "./../../thunks/cliente/buscar-cliente-con-ruta";
import { borrarClientes } from "./../../thunks/cliente/borrar-cliente";
import { connect } from "react-redux";
import TarjetaCliente from "./tarjeta-cliente";
import VolverButton from './../../components/globals/buttons/volver-button';
import EliminarBotonIcono from "./../../components/globals/buttons/eliminar-boton-icono";

class TarjetaDetalleCliente extends Component {
  static propTypes = {
    buscar: PropTypes.func,
    cliente: PropTypes.object,
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
        <TarjetaCliente
          cliente={this.props.cliente}
        />
        <Link
          className="btn btn-primary boton-tarjeta"
          to={"/clientes/editar/"+this.props.cliente._id}
        >
          Editar
        </Link>
        <EliminarBotonIcono
          boton
          titulo="Eliminar Cliente"
          texto="Seguro que desea borrar el Cliente?"
          id={this.props.cliente._id}
          accion={(value) => this.props.eliminar(value) }
        />
        <VolverButton
          ruta="/clientes"
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    cliente: getClienteConRuta(state),
    cargando: getBuscandoClienteConRuta(state),
  }),
  dispatch => ({
    buscar: (id) => dispatch(buscarClienteConRuta(id)),
    eliminar: (id) => dispatch(borrarClientes(id)),
  })
);

export default storeConnect(TarjetaDetalleCliente);