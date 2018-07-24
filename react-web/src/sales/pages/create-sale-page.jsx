import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { saveSale } from "sales/actions";
import CreateSale from "sales/components/create-sale";

const CreateSalePage = (props) => (
  <div>
    <h1><FormattedMessage id="sales.create.page.title" /></h1>
    <CreateSale sales={props.sales} onSave={value => props.save(value)} />
  </div>
);

CreateSalePage.propTypes = {
  save: PropTypes.func,
};

const storeConnect = connect(
  () => ({ }),
  dispatch => ({
    save: value => dispatch(saveSale(value)),
  }),
);

export default storeConnect(CreateSalePage);
