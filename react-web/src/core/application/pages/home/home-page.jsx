import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import withAuthentication from "core/application/hoc/withAuthentication";

class HomePage extends Component{
	static propTypes = {
		data: PropTypes.any,
	}

	constructor(props){
		super(props);
		console.log("hola");
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

export default withAuthentication(storeConnect(HomePage), { role: "ADMIN_ROLE", onFalse: "login" });
