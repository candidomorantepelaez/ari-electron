import React, { Component } from 'react';
import PropTypes from "prop-types";

class ContenidoPage extends Component {
	static propTypes = {
		body: PropTypes.object.isRequired
	};

  render() {
		return (
			<div className="ContenidoPage">
				{ this.props.body }
			</div>
		);
  }
}

export default ContenidoPage;
