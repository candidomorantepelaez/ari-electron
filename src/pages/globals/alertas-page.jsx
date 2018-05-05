import React, { Component } from "react";
import PropTypes from "prop-types";
import Alerta from "../../components/globals/alerts/alerta";
import { getAlertas } from "./../../reducers/globales/alertas";
import { connect } from "react-redux";

class AlertasPage extends Component {
  static propTypes = {
    alertas: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const filas = this.props.alertas.map((alert, key) =>
      <Alerta tipo={alert.tipo} id={key} mensaje={alert.mensaje} key={key} />
    );

    if (this.props.alertas.length > 0) {
      return <div>{filas}</div>;
    }

    return null;
  }
}

const storeConnect = connect(
  (state) => ({
    alertas: getAlertas(state),
  }),
  () => ({}),
);

export default storeConnect(AlertasPage);
