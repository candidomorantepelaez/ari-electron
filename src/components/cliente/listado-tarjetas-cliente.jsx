import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { getResultado, getBuscando } from "./../../reducers/cliente-reducers";
import { listadoClientes } from "./../../thunks/cliente-thunk";
import TarjetaCliente from "./tarjeta-cliente";
import { connect } from 'react-redux';

class ListadoTarjetasCliente extends Component {
  static propTypes = {
    listado: PropTypes.array,
    buscando: PropTypes.bool,
    buscar: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props.buscar();
  }

  render() {
    const listaTarjetas = this.props.listado.map((cliente, key) =>
        <TarjetaCliente cliente={cliente} key={key} />
    );

    return (
      <div className="container">
        <div className="row">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block tarjeta"
            to="/clientes/crear"
          >
            Crear Un Nuevo Cliente
          </Link>
        </div>
        <div className="row">
          {listaTarjetas}
        </div>
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    listado: getResultado(state),
    bucando: getBuscando(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoClientes()),
  })
);

export default storeConnect(ListadoTarjetasCliente);
