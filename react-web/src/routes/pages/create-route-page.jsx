import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import CreateRoute from "routes/components/create-route";
import { saveRoute } from "routes/actions";

const CreateRoutePage = ({getSaveRoute}) => (
  <div>
    <h3><FormattedMessage id="routes.create.page.title" /></h3>
    <CreateRoute
      onSave={value => getSaveRoute(value)}
    />
  </div>
);

CreateRoutePage.propTypes = {
  getSaveRoute: PropTypes.func,
};

const storeConnect = connect(
  () => ({}),
  dispatch => ({
    getSaveRoute: value => dispatch(saveRoute(value)),
  }),
);

export default storeConnect(CreateRoutePage);
