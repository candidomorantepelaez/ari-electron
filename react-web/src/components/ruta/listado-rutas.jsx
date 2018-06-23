import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import FilaRuta from "./fila-ruta";
import { getListadoRutas, getBuscandoRutas } from "./../../reducers/ruta/listado-rutas";
import { listadoRutas } from "./../../thunks/ruta/listado-rutas";
import { borrarRutas } from "./../../thunks/ruta/borrar-ruta";
import { connect } from 'react-redux';

class ListadoRutas extends Component {
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
    const filas = this.props.listado.map((ruta, key) =>
      <FilaRuta ruta={ruta} key={key} accion={value => this.props.eliminar(value)} />
    );

    return (
      <div className="container">
        <div className="row">
          <Link
            type="button"
            className="btn btn-primary btn-lg btn-block tarjeta"
            to="/rutas/crear"
          >
           Crear Una Nueva Ruta
          </Link>
        </div>
        <div className="row">
          <table className="table text-center">
            <thead>
              <tr>
                <th scope="col">Dia</th>
                <th scope="col">Nombre</th>
                <th scope="col">Franja Horaria</th>
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
    listado: getListadoRutas(state),
    bucando: getBuscandoRutas(state),
  }),
  dispatch => ({
    buscar: () => dispatch(listadoRutas()),
    eliminar: (id) => dispatch(borrarRutas(id)),
  })
);

export default storeConnect(ListadoRutas);
