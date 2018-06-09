import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarClientes } from "./../../thunks/cliente/editar-cliente";
import { buscarCliente } from "./../../thunks/cliente/buscar-cliente";
import { getCliente, getBuscandoCliente } from "./../../reducers/cliente/buscar-cliente";
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
        <fieldset className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <legend className="col-xl-12 col-lg-12 col-md-12 col-sm-12">Datos Cliente</legend>
          <hr/>
          <div className="row">
            <TextField
              field="_id"
              label="Nº Identificador"
              css="col-xl-2 col-lg-02 col-md-12 col-sm-12"
              />
            <TextField
              field="nombre"
              label="Nombre"
              css="col-xl-10 col-lg-10 col-md-12 col-sm-12"
              />
            <TextField
              field="cif"
              label="Dni/Cif"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="telefono"
              label="Telefono"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="email"
              label="Email"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
          </div>
        </fieldset>
        <fieldset className="col-12">
          <legend className="col-12">Dirección</legend>
          <hr/>
          <div className="row">
            <TextField
              field="calle"
              label="Calle"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="poblacion"
              label="Población"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="provincia"
              label="Provincia"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="codigoPostal"
              label="Cod. Postal"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
          </div>
        </fieldset>
        <fieldset className="col-12">
          <legend className="col-12">Datos del Servicio</legend>
          <hr/>
          <div className="row">
            <SelectField
              field="muestra"
              label="Muestra"
              options={ [ { value: true, label: "Si" },
                { value: false, label: "No" }] }
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <TextField
              field="numeroBotellas"
              label="Numero de Botellas"
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
            <SelectField
              field="ruta"
              label="Ruta"
              options={ [ { value: 1, label: "gijon" },
                { value: 2, label: "villa" }] }
              css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
              />
          </div>
        </fieldset>
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