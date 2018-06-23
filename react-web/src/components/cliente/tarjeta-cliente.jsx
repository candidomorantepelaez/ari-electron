import React, { Component } from "react";
import PropTypes from "prop-types";

class TarjetaCliente extends Component{

  static propTypes = {
    cliente: PropTypes.object,
    getRuta: PropTypes.func,
    ruta: PropTypes.obj,
    buscando: PropTypes.bool
  };

  constructor(props){
    super(props);
    if(this.props.cliente.ruta !== undefined){
      this.props.getRuta(this.props.cliente.ruta);
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card tarjeta">
          <div className="card-header">
            {this.props.cliente.nombre}
          </div>
          <div className="card-body">
            <h3>Datos Cliente</h3>
            <p className="card-text">
              Dni/Cif: {this.props.cliente.cif}
            </p>
            <p className="card-text">
              Telefono: {this.props.cliente.telefono}
            </p>
            <p className="card-text">
              Email: {this.props.cliente.email}
            </p>
            <h3>Direccion</h3>
            <p className="card-text">
              Calle: {this.props.cliente.calle}
            </p>
            <p className="card-text">
              Población: {this.props.cliente.poblacion}
            </p>
            <p className="card-text">
              Provincia: {this.props.cliente.provincia}
            </p>
            <p className="card-text">
              Cod. Postal: {this.props.cliente.codigoPostal}
            </p>
            <h3>Datos del Servicio</h3>
            <p className="card-text">
              Muestra: {this.props.cliente.muestra}
            </p>
            <p className="card-text">
              Nº Botellas: {this.props.cliente.numeroBotellas}
            </p>
            <p className="card-text">
              Ruta: {this.props.cliente.ruta.nombre}
            </p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default TarjetaCliente;
