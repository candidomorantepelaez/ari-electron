import React, {Component} from 'react';

class Select extends Component {

  constructor(props) {
    super(props);

    this.size = this.props.size || 12;
  }


  render() {
    var options = this.props.options.map(option => {
      return (<option key={option.value} value={option.value}>{option.label}</option>)
    })

    return (
      <div md={this.size}>
        <div controlId="formControlsSelect"
        validationState={this.props.error.status}
        >
          <label>
            {this.props.label}
            <span className="help-text">
              {this.props.helpText}
            </span>
          </label>
          <select componentClass="select" >
            {options}
          </select>
          <div>{this.props.error.message}</div>
        </div>

      </div>
    );
  }
}

export default Select