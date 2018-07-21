import React, {Component} from "react";
import Input from "core/application/components/forms/input";
import Select from "core/application/components/forms/select";
import { isNil, isEmpty, omit, merge, objOf } from "ramda";
import { FormattedMessage } from "react-intl";

class Form extends Component {

  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.state = {
      formData: this.props.initialValue || {},
      errors: {}
    };
  }

  handlerSubmit(evt) {
    evt.preventDefault();
    if (isEmpty(this.state.errors)) {
      this.props.onSubmit(this.state.formData);
    }
  }

  handleOnBlur(field, event) {
    if (field.onBlur) {
      field.onBlur(event.target.value);
    }

    if (field.validateOnBlur) {
      this.validate(field.name, field.validateOnBlur, event.target.value);
    }
  }

  handleChange(field, event) {
    this.setState({ formData: merge(this.state.formData, objOf(event.target.name)(event.target.value)) });

    if (field.onChange){
      field.onChange(event.target.value);
    }

    if(field.validateOnChange){
      this.validate(field.name, field.validateOnChange, event.target.value);
    }
  }

  getValue(key) {
    return this.state.formData[key] || '';
  }

  getErrors(key) {
    return this.state.errors[key];
  }

  manageErrors(key, error){
    if (isNil(error)) {
      if(isNil(this.state.errors[key]) === false) {
        this.setState({ errors: omit([key], this.state.errors)});
        return;
      }
      return;
    }
    this.setState({ errors: merge(this.state.erros, objOf(key)(error)) });
  }

  validate(key, validateFn, value) {
    if(validateFn){
      this.manageErrors(key, validateFn(value));
    }
  }

  getField(field, key){
    switch(field.type) {
      case "select":
        return (
          <Select
            key={key}
            className={field.className}
            label={field.label}
            name={field.name}
            options={(isNil(field.options)) ? this.props.options[field.name] : field.options}
            onChange={this.handleChange.bind(this, field)}
            validate={this.validate.bind(this, field.name, field.validate)}
            helpText={field.helpText}
            size={field.size}
            error={this.getErrors(field.name)}
          />
        );
      default:
        return (
          <Input
            key={key}
            name={field.name}
            label={field.label}
            helpText={field.helpText}
            type={field.type}
            className={field.className}
            value={this.getValue(field.name)}
            required={field.required}
            readOnly={field.readOnly}
            disabled={field.disabled}
            error={this.getErrors(field.name)}
            onChange={this.handleChange.bind(this, field)}
            onBlur={this.handleOnBlur.bind(this, field)}
            validateOnChange={this.validate.bind(this, field.name, field.validateOnChange)}
            validateOnBlur={this.validate.bind(this, field.name, field.validateOnBlur)}
          />
        );
    }
  }

  render() {
    return (
      <form
        className="form-container needs-validation"
        onSubmit={evt => this.handlerSubmit(evt)}
        autoComplete="false"
      >
        <h1>
          <FormattedMessage id={this.props.title} />
        </h1>
        <div className="row">
          {
            this.props.fields.map((field, key) => this.getField(field, key))
          }
        </div>
        <button
          className="btn btn-primary"
          type="submit"
        >
          <FormattedMessage id={this.props.actionLabel} />
        </button>
      </form>
    );
  }
}

export default Form;
