import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormBasic extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
    this.hanlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  componentDidMount() {
    if(this.props.defaultValue){
      let objeto = this.props.defaultValue;
      let elementos = document.querySelectorAll('.Form-input-control');
      for(let i = 0; i < elementos.length; i++){
        for (let propiedad in objeto){
          if(propiedad === elementos[i].name){
            elementos[i].value = objeto[propiedad];
            break;
          }
        }
      }
    }
  }

  handlerChange(evento) {

  };

  handlerSubmit(evento) {
    evento.preventDefault();
    let value = {};
    for(let i = 0; i < evento.currentTarget.length; i++){
      if(evento.currentTarget[i].type === "text" || evento.currentTarget[i].type === "select-one"){
        value[evento.currentTarget[i].name] = evento.currentTarget[i].value;
      }
    }
    this.props.onSubmit(value);
  };

  render() {
    return (
      <form
        onSubmit={ (evento) => this.handlerSubmit(evento) }
      >
        { this.props.children }
      </form>
    );
  }
}

export default FormBasic;
