import React, { Component } from 'react'
import { IntlText, PropTypes } from 'touka'
import { withFormContext } from 'touka-forms'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'


class TextField extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: props.value,
    }
  }

  handleChange(event) {
    const inputValue = event.target.value
    const { onChange } = this.props
    this.setState({ value: inputValue }, () => onChange(inputValue))
  }

  render() {
    const { value } = this.state
    const {
      label, name, margin, fullWidth, required, type, autofocus,
    } = this.props
    return (
      <FormControl
        margin={margin}
        required={required}
        fullWidth={fullWidth}
      >
        <InputLabel
          htmlFor={name}
        >
          <IntlText id={label} />
        </InputLabel>
        <Input
          id={name}
          name={name}
          autoFocus={autofocus}
          type={type}
          value={value}
          onChange={this.handleChange}
        />
      </FormControl>
    )
  }
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  margin: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  autofocus: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
}

TextField.defaultProps = {
  margin: 'normal',
  fullWidth: false,
  required: false,
  type: 'text',
  autofocus: false,
}

export default withFormContext(TextField)
