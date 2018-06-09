import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import history from "./../../../config/history";
import FaBars from "react-icons/lib/fa/bars";

class Menu extends Component {

  constructor(props){
    super(props);
    this.crearEstilo = this.crearEstilo.bind(this);
  }

  crearEstilo(ruta){
    const location = history.location;
    const segmentos = location.pathname.split("/");
    if(ruta === segmentos[1]){
      return "nav-item active activado";
    }else{
      return "nav-item active";
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg estilo-nav">
        <a className="navbar-brand" href="/">Ari Distribuciones</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars className="navbar-toggler-icon icono" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={this.crearEstilo("")} >
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className={this.crearEstilo("clientes")} >
                <Link className="nav-link" to="/clientes">Clientes</Link>
            </li>
            <li className={this.crearEstilo("productos")} >
                <Link className="nav-link" to="/productos">Productos</Link>
            </li>
            <li className={this.crearEstilo("promociones")} >
                <Link className="nav-link" to="/promociones">Promociones</Link>
            </li>
            <li className={this.crearEstilo("rutas")} >
                <Link className="nav-link" to="/rutas">Rutas</Link>
            </li>
            <li className={this.crearEstilo("ventas")} >
                <Link className="nav-link" to="/ventas">Ventas</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
