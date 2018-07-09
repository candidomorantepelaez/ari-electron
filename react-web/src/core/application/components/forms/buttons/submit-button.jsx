import React from 'react';
import { FormattedMessage } from 'react-intl';

const SubmitButton = () => (
  <button
    className="btn btn-primary boton-tarjeta"
    type="submit"
  >
    <FormattedMessage id="core.save" />
  </button>
);

export default SubmitButton;
