import React, { Component } from "react";
import PropTypes from "prop-types";

class Alerta extends Component {
  static propTypes = {
    tipo: PropTypes.string,
    mensaje: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    let estilo = "alert alert-warning alert-dismissible fade show";
    if (this.props.tipo === "success") {
      estilo = "alert alert-success alert-dismissible fade show";
    }

    if (this.props.tipo === "info") {
      estilo = "alert alert-info alert-dismissible fade show";
    }

    return (
      <div className={estilo} role="alert">
        <strong>{this.props.tipo}</strong> {this.props.mensaje}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default Alerta;
