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
        <fieldset className="col-12">
          <legend className="col-12">Datos de la Ruta</legend>
          <hr/>
          <div className="row">
            <TextField
              field="nombre"
              label="Nombre"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
              required
            />
            <TextField
              field="dia"
              label="Dia"
              css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
              required
            />
            <TextField
              field="franjaHoraria"
              label="Franja Horaria"
              css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
              required
            />
          </div>
        </fieldset>
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