import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarPromociones } from "./../../thunks/promocion/editar-promocion";
import { buscarPromocion } from "./../../thunks/promocion/buscar-promocion";
import { getPromocion, getBuscandoPromocion } from "./../../reducers/promocion/buscar-promocion";
import PropTypes from "prop-types";


class FormularioEdicionPromocion extends Component {
  static propTypes = {
    update: PropTypes.func,
    promocion: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.props.buscar(this.props.id);
  }

  handlerSubmit(value) {
    let objeto = {
      viejo: {_id: this.props.promocion._id },
      nuevo: value,
    }
    this.props.update(objeto);
  }

  render() {
    return (
      (this.props.cargando === true)
      ?
       <p>cargando...</p>
      :
      <FormBasic
        defaultValue={this.props.promocion}
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <fieldset className="col-12">
          <legend className="col-12">Datos de la Promocion</legend>
          <hr/>
          <div className="row">
            <TextField
              field="nombre"
              label="Nombre"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              required
            />
            <TextField
              field="descripcion"
              label="Descripcion"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              required
            />
            <TextField
              field="precio"
              label="Precio"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              required
            />
          </div>
        </fieldset>
        <SubmitButton />
        <VolverButton ruta="/promociones" />
      </FormBasic>
    );
  }
}

const storeConnect = connect(
  state => ({
    promocion: getPromocion(state),
    cargando: getBuscandoPromocion(state),
  }),
  dispatch => ({
    update: (value) => dispatch(editarPromociones(value)),
    buscar: (id) => dispatch(buscarPromocion(id)),
  }),
);

export default storeConnect(FormularioEdicionPromocion);