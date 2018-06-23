import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilaProducto from "./fila-producto";
import { getListadoProductos, getBuscandoProductos } from "./../../reducers/producto/listado-productos";
import { listadoProductos } from "./../../thunks/producto/listado-productos";
import { borrarProductos } from "./../../thunks/producto/borrar-producto";
import { connect } from 'react-redux';

class ListadoProductos extends Component {
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
    const filas = this.props.listado.map((producto, key) =>
      <FilaProducto producto={producto} key={key} accion={value => this.props.eliminar(value)} />
    );

    return (
      <div className="container">
        <div className="row">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block tarjeta"
            to="/productos/crear"
          >
           Crear Nuevo Producto
          </Link>
        </div>
        <div className="row">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
                <th scope="col">Iva</th>
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
    listado: getListadoProductos(state),
    bucando: getBuscandoProductos(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoProductos()),
    eliminar: (id) => dispatch(borrarProductos(id)),
  })
);

export default storeConnect(ListadoProductos);
