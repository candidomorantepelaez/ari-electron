import React, { Component } from "react";
import PropTypes from "prop-types";
import { Select } from "informed";
import { isNil } from "ramda";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";


class SelectField extends Component {

  constructor(props) {
    super(props);
    this.handlerValidate =  this.handlerValidate.bind(this);
    this.handlerCss = this.handlerCss.bind(this);
    this.handlerMask = this.handlerMask.bind(this);
  }

  static propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    css: PropTypes.string,
    validate: PropTypes.func,
    errors: PropTypes.string,
    mask: PropTypes.func,
    initialValue: PropTypes.string,
    validateOnBlur: PropTypes.bool,
    validateOnChange: PropTypes.bool,
    validateOnMount: PropTypes.bool,
    readonly: PropTypes.bool,
    intl: intlShape.isRequired,
  };

  handlerValidate(value) {
    if (this.props.required === true) {
      if (isNil(value) === true || value === "") {
        return `El campo ${this.props.intl.formatMessage({ id: this.props.label })} no debe estar vacio`;
      }
    }
    if (isNil(this.props.validate) === false) {
      return this.props.validate(value)
    }
    return null;
  }

  style = {
    width: "100%",
    marginTop: ".25rem",
    fontSize: "80%",
    color: "#dc3545",
  }

  handlerCss() {
    if (isNil(this.props.errors) === false) {
      return this.style;
    }
    return;
  }

  handlerMask(value) {
    if (isNil(this.props.mask) === false) {
      this.props.mask(value);
    }
    return value;
  }

  render() {
    return (
      <div
        className={"form-group "+this.props.css}
      >
        <label
          className="col-form-label"
          htmlFor={ this.props.field }
        >
          <FormattedMessage id={this.props.label} />
        </label>
        <Select
          className={`form-control Form-input-control ${this.handlerCss()}`}
          field={this.props.field}
          initialValue={this.props.initialValue}
          validate={value => this.handlerValidate(value)}
          id={this.props.field}
          validateOnBlur={this.props.validateOnBlur}
          validateOnChange={this.props.validateOnChange}
          validateOnMount={this.props.validateOnMount}
          mask={value => this.handlerMask(value)}
          disabled={this.props.readonly}
          style={this.handlerCss()}
        >
          { this.props.options.map((object, i) => <option value={object.value} key={i} >{object.label}</option>) }
        </Select>
      </div>
    );
  }
}

export default injectIntl(SelectField);
