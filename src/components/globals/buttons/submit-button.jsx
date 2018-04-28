import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    return (
      <button 
        className="btn btn-primary btn-sm boton-tarjeta" 
        type="submit" 
      >
        Guardar
      </button>
    );
  }
}

export default SubmitButton;
