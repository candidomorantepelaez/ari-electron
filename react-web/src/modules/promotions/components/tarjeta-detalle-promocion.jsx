import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getPromocion, getBuscandoPromocion } from "./../../reducers/promocion/buscar-promocion";
import { buscarPromocion } from "./../../thunks/promocion/buscar-promocion";
import { borrarPromociones } from "./../../thunks/promocion/borrar-promocion";
import { connect } from "react-redux";
import TarjetaPromocion from "./tarjeta-promocion";
import VolverButton from './../../components/globals/buttons/volver-button';
import EliminarBotonIcono from "./../../components/globals/buttons/eliminar-boton-icono";

class TarjetaDetallePromocion extends Component {
  static propTypes = {
    buscar: PropTypes.func,
    promocion: PropTypes.object,
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
        <TarjetaPromocion
          promocion={this.props.promocion}
        />
        <Link
          className="btn btn-primary boton-tarjeta"
          to={"/promociones/editar/"+this.props.promocion._id}
        >
          Editar
        </Link>
        <EliminarBotonIcono
          boton
          titulo="Eliminar Promocion"
          texto="Seguro que desea borrar la Promocion?"
          id={this.props.promocion._id}
          accion={(value) => this.props.eliminar(value) }
        />
        <VolverButton
          ruta="/promociones"
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    promocion: getPromocion(state),
    cargando: getBuscandoPromocion(state),
  }),
  dispatch => ({
    buscar: (id) => dispatch(buscarPromocion(id)),
    eliminar: (id) => dispatch(borrarPromociones(id)),
  })
);

export default storeConnect(TarjetaDetallePromocion);