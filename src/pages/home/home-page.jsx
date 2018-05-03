import React, { Component } from 'react';
import { connect } from "react-redux";
import { getSuccess } from "./../../reducers/cliente-reducers";
import Success from "./../../components/globals/alerts/success";

class HomePage extends Component {

  render() {
		return (
			<div>
				{
					(this.props.success)
				?
					<Success texto={this.props.success} />
				:
					null
				}
				<h3>Pagina Home</h3>
			</div>
		);
	}
}

const storeConnect = connect (
	state => ({
		success: getSuccess(state),
	}),
	() => ({}),
);

export default HomePage;
