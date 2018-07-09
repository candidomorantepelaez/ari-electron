import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaBars from "react-icons/lib/fa/bars";
import history from "./../../routes/history";
import module from "./../../module/index";
import { FormattedMessage } from 'react-intl';

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
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="core.app.title" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="navbar-toggler-icon icono" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            {module.getMenu().map((obj, key) => (
              <li key={key} className={this.crearEstilo(obj.to)} >
                <Link key={key} className="nav-link" to={obj.to}>{obj.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
