import React from 'react'
import { PropTypes, IntlText } from 'touka'


const AlertComponent = ({ type, message, onClose }) => (
  <div className={`alert-${type}`}>
    <IntlText id={message} />
    <button type="button" onClick={onClose}>
      <span>&times;</span>
    </button>
  </div>
)

AlertComponent.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AlertComponent
