import React, { Component } from 'react';
import TextField from "./../../components/globals/fields/text-field";
import FormBasic from './../../components/globals/fields/form-basic';
import SubmitButton from './../../components/globals/buttons/submit-button';
import VolverButton from './../../components/globals/buttons/volver-button';
import { connect } from 'react-redux';
import { guardarRutas } from "./../../thunks/ruta/guardar-ruta";
import PropTypes from "prop-types";

class FormularioCreacionRuta extends Component {
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
        <fieldset className="col-12">
          <legend className="col-12">Datos de la Ruta</legend>
          <hr/>
          <div className="row">
            <TextField
              field="nombre"
              label="Nombre"
              css="col-xl-12 col-lg-12 col-md-12 col-sm-12"
            />
            <TextField
              field="dia"
              label="Dia"
              css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
            />
            <TextField
              field="franjaHoraria"
              label="Franja Horaria"
              css="col-xl-6 col-lg-6 col-md-6 col-sm-12"
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

  }),
  dispatch => ({
    save: (value) => dispatch(guardarRutas(value)),
  }),
);

export default storeConnect(FormularioCreacionRuta);