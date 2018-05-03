import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarClientes } from "./../../thunks/cliente/editar-cliente";
import { buscarCliente } from "./../../thunks/cliente/buscar-cliente";
import { getCliente, getBuscandoCliente } from "./../../reducers/cliente-reducers";
import PropTypes from "prop-types";


class FormularioEdicionCliente extends Component {
  static propTypes = {
    update: PropTypes.func,
    cliente: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.props.buscar(this.props.id);
  }

  handlerSubmit(value) {
    let objeto = {
      viejo: {_id: this.props.cliente._id },
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
        defaultValue={this.props.cliente}
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <TextField
          field="_id"
          label="Nº Identificador"
          />
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
    cliente: getCliente(state),
    cargando: getBuscandoCliente(state),
  }),
  dispatch => ({
    update: (value) => dispatch(editarClientes(value)),
    buscar: (id) => dispatch(buscarCliente(id)),
  }),
);

export default storeConnect(FormularioEdicionCliente);