import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilaCliente from "./fila-cliente";
import { getListadoClientesConRuta, getBuscandoClientesConRuta } from "./../../reducers/cliente/listado-clientes-con-ruta";
import { listadoClientesConRuta } from "./../../thunks/cliente/listado-clientes-con-ruta";
import { borrarClientes } from "./../../thunks/cliente/borrar-cliente";
import { connect } from 'react-redux';

class ListadoCliente extends Component {
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
    const filas = this.props.listado.map((cliente, key) =>
      <FilaCliente cliente={cliente} key={key} accion={value => this.props.eliminar(value)} />
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
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Ruta</th>
                <th scope="col">Numero Botellas</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              { filas }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    listado: getListadoClientesConRuta(state),
    bucando: getBuscandoClientesConRuta(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoClientesConRuta()),
    eliminar: (id) => dispatch(borrarClientes(id)),
  })
);

export default storeConnect(ListadoCliente);
