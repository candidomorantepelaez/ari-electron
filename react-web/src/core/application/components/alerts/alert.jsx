import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

class Alert extends Component {
  static propTypes = {
    type: PropTypes.string,
    message: PropTypes.string,
    id: PropTypes.number,
  };

  render() {
    return (
      <div className={`alert alert-${this.props.type} alert-dismissible fade show`} role="alert">
        <strong>{this.props.type}</strong>
        <FormattedMessage id={this.props.message} />
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}

export default Alert;
