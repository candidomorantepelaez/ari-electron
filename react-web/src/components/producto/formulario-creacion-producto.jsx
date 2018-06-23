import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarProductos } from "./../../thunks/producto/guardar-producto";
import PropTypes from "prop-types";

class FormularioCreacionProducto extends Component {
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
          <legend className="col-12">Datos del Producto</legend>
          <hr/>
          <div className="row">
            <TextField
              field="codigo"
              label="Codigo"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
            />
            <TextField
              field="precio"
              label="Precio"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
            />
            <TextField
              field="iva"
              label="Iva"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
            />
          </div>
          <div className="row">
            <TextField
              field="nombre"
              label="Nombre"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            />
            <TextField
              field="descripcion"
              label="Descripcion"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            />
          </div>
        </fieldset>
        <SubmitButton />
        <VolverButton ruta="/productos" />
      </FormBasic>
    );
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({
    save: (value) => dispatch(guardarProductos(value)),
  }),
);

export default storeConnect(FormularioCreacionProducto);
