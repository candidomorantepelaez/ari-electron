import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { editarRutas } from "./../../thunks/ruta/editar-ruta";
import { buscarRuta } from "./../../thunks/ruta/buscar-ruta";
import { getRuta, getBuscandoRuta } from "./../../reducers/ruta/buscar-ruta";
import PropTypes from "prop-types";


class FormularioEdicionRuta extends Component {
  static propTypes = {
    update: PropTypes.func,
    ruta: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.props.buscar(this.props.id);
  }

  handlerSubmit(value) {
    let objeto = {
      viejo: {_id: this.props.ruta._id },
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
        defaultValue={this.props.ruta}
        onSubmit={ (value) => this.handlerSubmit( value ) }
      >
        <TextField
          field="_id"
          label="Nº Identificador"
        />
        <TextField
          field="dia"
          label="Dia"
        />
        <TextField
          field="nombre"
          label="Nombre"
        />
        <TextField
          field="franjaHoraria"
          label="Franja Horaria"
        />
        <SubmitButton />
        <VolverButton ruta="/rutas" />
      </FormBasic>
    );
  }
}

const storeConnect = connect(
  state => ({
    ruta: getRuta(state),
    cargando: getBuscandoRuta(state),
  }),
  dispatch => ({
    update: (value) => dispatch(editarRutas(value)),
    buscar: (id) => dispatch(buscarRuta(id)),
  }),
);

export default storeConnect(FormularioEdicionRuta);