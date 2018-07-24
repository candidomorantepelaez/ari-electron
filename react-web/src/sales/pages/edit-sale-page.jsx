import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import EditSale from "sales/components/edit-sale";
import { getSale, getSearching } from "sales/reducers/search-sale-reducer";
import { searchSale, editSale } from "sales/actions";

class EditSalePage extends Component {
  static propTypes = {
    sale: PropTypes.object,
    searching: PropTypes.bool,
    getSale: PropTypes.func,
    removeSale: PropTypes.func,
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.props.getSale(this.props.match.params.id)
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="sales.edit.page.title" /></h3>
        <EditSale
          sale={this.props.sale}
          onEdit={id => this.props.getEditSale(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    sale: getSale(state),
    searching: getSearching(state),
  }),
  dispatch => ({
    getSale: id => dispatch(searchSale(id)),
    getEditSale: (id) => dispatch(editSale(id)),
  }),
);

export default storeConnect(EditSalePage);
