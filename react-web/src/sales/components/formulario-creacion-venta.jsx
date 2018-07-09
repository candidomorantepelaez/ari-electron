import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import SelectField from './../../components/globals/fields/select-field';
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarVentas } from "./../../thunks/venta/guardar-venta";
import PropTypes from "prop-types";
import { getBuscandoClientes, getListadoClientes } from './../../reducers/cliente/listado-clientes';
import { listadoClientes } from "./../../thunks/cliente/listado-clientes";
import { getBuscandoProductos, getListadoProductos } from './../../reducers/producto/listado-productos';
import { listadoProductos } from "./../../thunks/producto/listado-productos";

class FormularioCreacionCliente extends Component {
  static propTypes = {
    save: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.formatearClientes = this.formatearClientes.bind(this);
    this.props.buscarClientes();
    this.props.buscarProductos();
    this.state = {
      productos: [],
    }
  }

  handlerSubmit(value) {
    this.props.save(value);
  }

  formatearClientes() {
    return this.props.clientes.map((obj) => Object.assign(obj, { value: obj._id, label: obj.nombre }));
  }

  formatearProductos() {
    return this.props.productos.map((obj) => Object.assign(obj, { value: obj._id, label: obj.nombre }));
  }

  render() {
    return (
      <FormBasic
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <fieldset className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <legend className="col-xl-12 col-lg-12 col-md-12 col-sm-12">Datos Venta</legend>
            <hr/>
            <div className="row">
              <TextField
                field="fecha"
                label="Fecha"
                css="col-xl-6 col-lg-6 col-md-12 col-sm-12"
                required
                />
              {(this.props.buscandoClientes === true) ?
                null
                :
                <SelectField
                  field="cliente"
                  label="Selecciona cliente"
                  options={this.formatearClientes()}
                  css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                  required
                  />
              }
            </div>
            <legend className="col-xl-12 col-lg-12 col-md-12 col-sm-12">Productos</legend>
            <hr/>
            <div className="row">
              {(this.props.buscandoProductos === true) ?
                null
                :
                <SelectField
                  field="producto"
                  label="Selecciona Producto"
                  options={this.formatearProductos()}
                  css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
                  />
              }
            </div>
        </fieldset>
        <SubmitButton />
        <VolverButton ruta="/ventas" />
      </FormBasic>
    );
  }
}

const storeConnect = connect(
  state => ({
    clientes: getListadoClientes(state),
    buscandoClientes: getBuscandoClientes(state),
    productos: getListadoProductos(state),
    buscandoProductos: getBuscandoProductos(state)
  }),
  dispatch => ({
    save: (value) => dispatch(guardarVentas(value)),
    buscarClientes: () => dispatch(listadoClientes()),
    buscarProductos: () => dispatch(listadoProductos())
  }),
);

export default storeConnect(FormularioCreacionCliente);
