import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getRuta, getBuscandoRuta } from "./../../reducers/ruta/buscar-ruta";
import { buscarRuta } from "./../../thunks/ruta/buscar-ruta";
import { borrarRutas } from "./../../thunks/ruta/borrar-ruta";
import { connect } from "react-redux";
import TarjetaRuta from "./tarjeta-ruta";
import VolverButton from './../../components/globals/buttons/volver-button';
import EliminarBotonIcono from "./../../components/globals/buttons/eliminar-boton-icono";

class TarjetaDetalleRuta extends Component {
  static propTypes = {
    buscar: PropTypes.func,
    ruta: PropTypes.object,
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
        <TarjetaRuta
          ruta={this.props.ruta}
        />
        <Link
          className="btn btn-primary boton-tarjeta"
          to={"/rutas/editar/"+this.props.ruta._id}
        >
          Editar
        </Link>
        <EliminarBotonIcono
          boton
          titulo="Eliminar Ruta"
          texto="Seguro que desea borrar la Ruta?"
          id={this.props.ruta._id}
          accion={(value) => this.props.eliminar(value) }
        />
        <VolverButton
          ruta="/rutas"
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    ruta: getRuta(state),
    cargando: getBuscandoRuta(state),
  }),
  dispatch => ({
    buscar: (id) => dispatch(buscarRuta(id)),
    eliminar: (id) => dispatch(borrarRutas(id)),
  })
);

export default storeConnect(TarjetaDetalleRuta);