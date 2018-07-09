import React from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { FormattedMessage } from 'react-intl';

const Confirm = (props) => (
  <Modal
    open={props.showModal}
    onClose={() => props.onClose()}
    center
  >
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => props.onClose()}
    >
      <FormattedMessage id="core.cancel" />
    </button>
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => props.onConfirm()}
    >
      <FormattedMessage id="core.confirm" />
    </button>
  </Modal>
);

Confirm.propTypes = {
  showModal: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
}

export default Confirm;
