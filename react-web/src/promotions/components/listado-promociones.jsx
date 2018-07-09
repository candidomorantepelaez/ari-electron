import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilaPromocion from "./fila-promocion";
import { getListadoPromociones, getBuscandoPromociones } from "./../../reducers/promocion/listado-promociones";
import { listadoPromociones } from "./../../thunks/promocion/listado-promociones";
import { borrarPromociones } from "./../../thunks/promocion/borrar-promocion";
import { connect } from 'react-redux';

class ListadoPromociones extends Component {
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
    const filas = this.props.listado.map((promocion, key) =>
      <FilaPromocion promocion={promocion} key={key} accion={value => this.props.eliminar(value)} />
    );

    return (
      <div className="container">
        <div className="row">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block tarjeta"
            to="/promociones/crear"
          >
           Crear Una Nueva Promocion
          </Link>
        </div>
        <div className="row">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
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
    listado: getListadoPromociones(state),
    bucando: getBuscandoPromociones(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoPromociones()),
    eliminar: (id) => dispatch(borrarPromociones(id)),
  })
);

export default storeConnect(ListadoPromociones);
