import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveConfig } from "configs/actions";
import CreateConfig from "configs/components/create-config";

const CreateConfigPage = (props) => (
  <div>
    <h1><FormattedMessage id="configs.create.page.title" /></h1>
    <CreateConfig onSave={value => props.save(value)} />
  </div>
);

CreateConfigPage.propTypes = {
  save: PropTypes.func,
}

const storeConnect = connect(
  () => ({}),
  dispatch => ({
    save: value => dispatch(saveConfig(value)),
  }),
);

export default storeConnect(CreateConfigPage);