import React, { Component } from 'react';
import PropTypes from "prop-types";
import FaTrash from "react-icons/lib/fa/trash";

class EliminarBotonIcono extends Component{
  static propTypes = {
    accion: PropTypes.func,
    titulo: PropTypes.string,
    texto: PropTypes.string,
    boton: PropTypes.bool,
    id: PropTypes.string,
  }

  constructor(props){
    super(props);
    this.handlerEliminar = this.handlerEliminar.bind(this);
  }

  handlerEliminar() {
    if(this.props.accion){
      this.props.accion(this.props.id);
    }
  }

  render() {
    return(
      <a data-toggle="tooltip" data-placement="top" title="Borrar Registro">
        {
        (this.props.boton)
        ?
          <button type="button" className="btn btn-primary boton-tarjeta" data-toggle="modal" data-target={"#"+this.props.id}>
            Eliminar
          </button>
        :
          <FaTrash className="icono" data-toggle="modal" data-target={"#"+this.props.id} />
        }
        <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{this.props.titulo}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">{this.props.texto}</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={() => this.handlerEliminar() } data-dismiss="modal">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }
}

export default EliminarBotonIcono;
