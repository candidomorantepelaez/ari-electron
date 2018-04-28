import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextField extends Component {

  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      onChange: this.props.onChange | null,
    };
  }

  static propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    value: PropTypes.string,
  };

  handlerChange(value) {
    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div
        className="form-group row">
        <label
          className="col-sm-2 col-form-label"
          htmlFor={ this.props.field }>
          { this.props.label }
        </label>
        <div className="col-sm-10">
          <input
            className="form-control Form-input-control"
            type="text"
            value={ this.props.value }
            name={ this.props.field }
            id={ this.props.field }
            required={ this.props.required }
            onChange={ value => this.handlerChange(value.value)}/>
        </div>
      </div>
    );
  }
}

export default TextField;
