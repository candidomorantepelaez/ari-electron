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
        <TextField
          field="codigo"
          label="Codigo"
        />
        <TextField
          field="nombre"
          label="Nombre"
        />
        <TextField
          field="descripcion"
          label="Descripcion"
        />
        <TextField
          field="precio"
          label="Precio"
        />
        <TextField
          field="iva"
          label="Iva"
        />
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
