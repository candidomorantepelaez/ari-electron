import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import module from "core/application/module/index";
import withAuthentication from "core/application/hoc/withAuthentication";

class HomePage extends Component{
	static propTypes = {
		data: PropTypes.any,
		currentUser: PropTypes.object,
	}

	constructor(props){
		super(props);
		console.log("hola");
	}

	render() {
		return(
			<div>
				<h1>Bienvenido a Ari Distribuciones</h1>
				{module.getPageRewiew().map((obj, key) => React.createElement(obj, { key }))}
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

export default withAuthentication(storeConnect(HomePage), { onFalse: "login" });
