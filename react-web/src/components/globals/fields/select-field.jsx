import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectField extends Component {

  constructor(props) {
    super(props);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      options: [],
      onChange: this.props.onChange | null,
      value: this.props.value | "",
    };
  }

  static propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    value: PropTypes.string,
    css: PropTypes.string
  };

  handlerChange(value) {
    if(this.props.onChange){
      this.props.onChange(value);
    }
  }

  render() {
    return (
      <div
        className={"form-group "+this.props.css}>
        <label
          className="col-form-label"
          htmlFor={ this.props.field }>
          { this.props.label }
        </label>
        <select
          className="form-control Form-input-control"
          value={this.props.value}
          name={ this.props.field }
          id={ this.props.field }
          required={ this.props.required }
          onChange={ evento => this.handlerChange(evento.value) } >
          { this.props.options.map((object, i) => <option value={object.value} key={i} >{object.label}</option>) }
        </select>
      </div>
    );
  }
}

export default SelectField;
