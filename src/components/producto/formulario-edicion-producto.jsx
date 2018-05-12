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
        <TextField
          field="_id"
          label="Nº Identificador"
        />
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
    producto: getProducto(state),
    cargando: getBuscandoProducto(state),
  }),
  dispatch => ({
    update: (value) => dispatch(editarProductos(value)),
    buscar: (id) => dispatch(buscarProducto(id)),
  }),
);

export default storeConnect(FormularioEdicionProducto);
