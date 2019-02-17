import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarPromociones } from "./../../thunks/promocion/guardar-promocion";
import PropTypes from "prop-types";

class FormularioCreacionPromocion extends Component {
  static propTypes = {
    save: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerSubmit(value) {
    this.props.save(value);
  }

  render() {
    return (
      <FormBasic
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

  }),
  dispatch => ({
    save: (value) => dispatch(guardarPromociones(value)),
  }),
);

export default storeConnect(FormularioCreacionPromocion);