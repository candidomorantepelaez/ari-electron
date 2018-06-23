import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarClientes } from "./../../thunks/cliente/guardar-cliente";
import PropTypes from "prop-types";
import { getBuscandoRutas, getListadoRutas } from './../../reducers/ruta/listado-rutas';
import { listadoRutas } from "./../../thunks/ruta/listado-rutas";

class FormularioCreacionCliente extends Component {
  static propTypes = {
    save: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.formatearRutas = this.formatearRutas.bind(this);
    this.props.buscarRutas();
  }

  handlerSubmit(value) {
    this.props.save(value);
  }

  formatearRutas() {
    return this.props.rutas.map((obj) => Object.assign(obj, { value: obj._id, label: obj.nombre }));
  }

  render() {
    return (
      <FormBasic
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <fieldset className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <legend className="col-xl-12 col-lg-12 col-md-12 col-sm-12">Datos Cliente</legend>
            <hr/>
            <div className="row">
              <TextField
                field="nombre"
                label="Nombre"
                css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
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
            {(this.props.buscandoRutas === true) ?
              null
              :
              <SelectField
                field="ruta"
                label="Ruta"
                options={this.formatearRutas()}
                css="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                />
            }
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
    rutas: getListadoRutas(state),
    buscandoRutas: getBuscandoRutas(state)
  }),
  dispatch => ({
    save: (value) => dispatch(guardarClientes(value)),
    buscarRutas: () => dispatch(listadoRutas())
  }),
);

export default storeConnect(FormularioCreacionCliente);
