import React, { Component } from "react";
import PropTypes from "prop-types";
import FaTrash from "react-icons/lib/fa/trash";
import Confirm from "./../../modals/confirm";
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

class DeleteButtonIcon extends Component{
  static propTypes = {
    action: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
    button: PropTypes.bool,
    id: PropTypes.string,
    intl: intlShape.isRequired,
  }

  constructor(props){
    super(props);
    this.handlerEliminar = this.handlerEliminar.bind(this);
    this.state = {
      show: false,
    }
  }

  handlerEliminar() {
    this.setState({ show: false});
    this.props.action(this.props.id);
  }

  render() {
    return(
      <a
        data-toggle="tooltip"
        data-placement="top"
        title={this.props.intl.formatMessage({ id: "core.delete" })}
      >
        {(this.props.button === true) ?
          <button
            type="button"
            className="btn btn-primary boton-tarjeta"
            onClick={() =>this.setState({ show: true })}
          >
            <FormattedMessage id="core.delete" />
          </button>
          :
          <FaTrash
            className="icono"
            onClick={() => this.setState({ show: true })}
          />
        }
        <Confirm
          showModal={this.state.show}
          title={this.props.title}
          text={this.props.text}
          onClose={() => this.setState({ show: false })}
          onConfirm={() => this.handlerEliminar()}
        />
      </a>
    );
  }
}

export default injectIntl(DeleteButtonIcon);
