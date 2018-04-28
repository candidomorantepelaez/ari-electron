import React, { Component } from 'react';
import PropTypes from "prop-types";
import Menu from "./components/globals/menus/menu-principal";
import ContenidoPage from "./pages/contenido";
//const { dialog } = window.require('electron').remote;

class App extends Component {
  
	static propTypes = {
		children: PropTypes.object.isRequired
	};

  render() {
		return (
			<div className="App">
				<Menu />
				<div className="container">
					<ContenidoPage body={ this.props.children } />	
				</div>			
			</div>
		);
  }
}

export default App;
