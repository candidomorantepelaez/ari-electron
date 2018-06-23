import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getContandoClientes, getNumeroClientes } from "./../../reducers/cliente/contar-clientes";
import { contarClientes } from "./../../thunks/cliente/contar-clientes";
import { getContandoProductos, getNumeroProductos } from "./../../reducers/producto/contar-productos";
import { contarProductos } from "./../../thunks/producto/contar-productos";
import { getContandoRutas, getNumeroRutas } from "./../../reducers/ruta/contar-rutas";
import { contarRutas } from "./../../thunks/ruta/contar-rutas";
import { getContandoVentas, getNumeroVentas } from "./../../reducers/venta/contar-ventas";
import { contarVentas } from "./../../thunks/venta/contar-ventas";
import { getContandoPromociones, getNumeroPromociones } from "./../../reducers/promocion/contar-promociones";
import { contarPromociones } from "./../../thunks/promocion/contar-promociones";

class HomePage extends Component{
	static propTypes = {
		contandoClientes: PropTypes.bool,
		numeroClientes: PropTypes.number,
		getNumeroClientes: PropTypes.func,
	}

	constructor(props){
		super(props);
		this.props.contarNumeroClientes();
		this.props.contarNumeroProductos();
		this.props.contarNumeroRutas();
		this.props.contarNumeroVentas();
		this.props.contarNumeroPromociones();
	}

	render() {
		return(
			<div>
				<h1>Bienvenido a Ari Distribuciones</h1>
				<h3>Ahora mismo disponemos de...</h3>
				<p>Numero de Clientes: {this.props.numeroClientes}</p>
				<p>Numero de Rutas: {this.props.numeroRutas}</p>
				<p>Numero de Productos: {this.props.numeroProductos}</p>
				<p>Numero de Ventas: {this.props.numeroVentas}</p>
				<p>Numero de Promociones: {this.props.numeroPromociones}</p>
			</div>
		);
	}
}

const storeConnect = connect(
	state => ({
		contandoClientes: getContandoClientes(state),
		numeroClientes: getNumeroClientes(state),
		contandoProductos: getContandoProductos(state),
		numeroProductos: getNumeroProductos(state),
		contandoRutas: getContandoRutas(state),
		numeroRutas: getNumeroRutas(state),
		contandoVentas: getContandoVentas(state),
		numeroVentas: getNumeroVentas(state),
		contandoPromociones: getContandoPromociones(state),
		numeroPromociones: getNumeroPromociones(state),
	}),
	dispatch => ({
		contarNumeroClientes: () => dispatch(contarClientes()),
		contarNumeroProductos: () => dispatch(contarProductos()),
		contarNumeroRutas: () => dispatch(contarRutas()),
		contarNumeroVentas: () => dispatch(contarVentas()),
		contarNumeroPromociones: () => dispatch(contarPromociones())
	})
);

export default storeConnect(HomePage);
