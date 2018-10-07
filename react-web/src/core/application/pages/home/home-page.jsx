import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";


class HomePage extends Component{
	static propTypes = {

	}

	constructor(props){
		super(props);
	}

	render() {
		return(
			<div>
				<h1>Bienvenido a Ari Distribuciones</h1>
				<h3>Ahora mismo disponemos de...</h3>
				<p>Numero de Clientes: 0</p>
				<p>Numero de Rutas: 0</p>
				<p>Numero de Productos: 0</p>
				<p>Numero de Ventas: 0</p>
				<p>Numero de Promociones: 0</p>
			</div>
		);
	}
}

const storeConnect = connect(
	state => ({

	}),
	dispatch => ({

	})
);

export default storeConnect(HomePage);
