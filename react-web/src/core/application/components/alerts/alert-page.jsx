import React, { Component } from "react";
import PropTypes from "prop-types";
import Alert from "./alert";
import { connect } from "react-redux";
import { getAlerts } from "./../../reducers/alert-reducer";

class AlertPage extends Component {
  static propTypes = {
    alerts: PropTypes.array,
  };

  render() {
    if (this.props.alerts.length > 0) {
      return (
        <div>
          {this.props.alerts.map((alert, key) =>
            <Alert type={alert.type} id={key} message={alert.message} key={key} />
          )}
        </div>
      );
    }
    return null;
  }
}

const storeConnect = connect(
  (state) => ({
    alerts: getAlerts(state),
  }),
  () => ({}),
);

export default storeConnect(AlertPage);
