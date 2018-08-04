import React from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Form from "core/application/components/forms/form";
import SubmitButton from "core/application/components/forms/buttons/submit-button";
import { credentials } from "core/application/actions/login-action";

const loginForm = {
  actions: [<SubmitButton />],
  fields: [
    {
      name: "Nombre",
      label: "core.name",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    }, {
      name: "Password",
      label: "core.pass",
      type: "text",
      className: "col-xl-12 col-lg-12 col-md-12 col-sm-12",
      required: true,
    },
  ],
}

const LoginPage = (props) => (
  <div>
    <h1><FormattedMessage id="core.app.wellcome" /></h1>
    <h2><FormattedMessage id="core.app.description" /></h2>
    <Form
      actions={loginForm.actions}
      onSubmit={value => props.onLogin(value)}
      fields={loginForm.fields}
    />
  </div>
);

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

const storeConnect = connect(
	() => ({}),
	dispatch => ({
		onLogin: (value) => dispatch(credentials(value)),
	})
);

export default storeConnect(LoginPage);
