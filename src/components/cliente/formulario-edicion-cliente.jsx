import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarClientes, buscarCliente } from "./../../thunks/cliente-thunk";
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
    this.state = {
      _id: this.props.cliente._id,
      nombre: this.props.cliente.nombre,
      direccion: this.props.cliente.direccion,
      numeroBotellas: this.props.cliente.numeroBotellas,
      muestra: this.props.cliente.muestra,
      ruta: this.props.cliente.ruta,
    };
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

      (this.props.cargando === true) ?
       <p>cargando...</p>
      :
      <FormBasic
        defaultValue={this.props.cliente}
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <TextField
          field="_id"
          label="Nº Identificador"
          value={this.state._id}
          onChange={value => this.setState({ _id: value })}
          />
        <TextField
          field="nombre"
          label="Nombre"
          value={this.state.nombre}
          onChange={value => this.setState({ nombre: value })}
          />
        <TextField
          field="direccion"
          label="Direccion"
          value={this.state.direccion}
          onChange={value => this.setState({ direccion: value })}
          />
        <TextField
          field="numeroBotellas"
          label="Numero de Botellas"
          onChange={value => this.setState({ numeroBotellas: value })}
          value={this.state.numeroBotellas}
          />
        <SelectField
          field="muestra"
          label="Muestra"
          value={this.state.muestra}
          onChange={value => this.setState({ muestra: value })}
          options={ [ { value: true, label: "Si" },
            { value: false, label: "No" }] }
          />
        <SelectField
          field="ruta"
          label="Ruta"
          value={this.state.ruta}
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