import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilaVenta from "./fila-venta";
import { getListadoVentas, getBuscandoVentas } from "./../../reducers/venta/listado-ventas";
import { listadoVentas } from "./../../thunks/venta/listado-ventas";
import { borrarVentas } from "./../../thunks/venta/borrar-venta";
import { connect } from 'react-redux';

class ListadoVentas extends Component {
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
    const filas = this.props.listado.map((venta, key) =>
      <FilaVenta venta={venta} key={key} accion={value => this.props.eliminar(value)} />
    );

    return (
      <div className="container">
        <div className="row">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block tarjeta"
            to="/ventas/crear"
          >
            Nueva Venta
          </Link>
        </div>
        <div className="row">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Cliente</th>
                <th scope="col">Importe</th>
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
    listado: getListadoVentas(state),
    bucando: getBuscandoVentas(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoVentas()),
    eliminar: (id) => dispatch(borrarVentas(id)),
  })
);

export default storeConnect(ListadoVentas);
