import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarProductos } from "./../../thunks/producto/editar-producto";
import { buscarProducto } from "./../../thunks/producto/buscar-producto";
import { getProducto, getBuscandoProducto } from "./../../reducers/producto/buscar-producto";
import PropTypes from "prop-types";


class FormularioEdicionProducto extends Component {
  static propTypes = {
    update: PropTypes.func,
    producto: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.props.buscar(this.props.id);
  }

  handlerSubmit(value) {
    let objeto = {
      viejo: {_id: this.props.producto._id },
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
        defaultValue={this.props.producto}
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
    producto: getProducto(state),
    cargando: getBuscandoProducto(state),
  }),
  dispatch => ({
    update: (value) => dispatch(editarProductos(value)),
    buscar: (id) => dispatch(buscarProducto(id)),
  }),
);

export default storeConnect(FormularioEdicionProducto);
