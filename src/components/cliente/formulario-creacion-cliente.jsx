import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarClientes } from "./../../thunks/cliente-thunk";
import PropTypes from "prop-types";

class FormularioCreacionCliente extends Component {
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
          field="nombre"
          label="Nombre"
          />
        <TextField
          field="direccion"
          label="Direccion"
          />
        <TextField
          field="numeroBotellas"
          label="Numero de Botellas"
          />
        <SelectField
          field="muestra"
          label="Muestra"
          options={ [ { value: true, label: "Si" },
            { value: false, label: "No" }] }
          />
        <SelectField
          field="ruta"
          label="Ruta"
          options={ [ { value: 1, label: "gijon" },
            { value: 2, label: "villa" }] }
          />
        <SubmitButton />
        <VolverButton ruta="/clientes" />
      </FormBasic>
    );
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({
    save: (value) => dispatch(guardarClientes(value)),
  }),
);

export default storeConnect(FormularioCreacionCliente);