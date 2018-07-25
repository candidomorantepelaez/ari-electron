import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearching, getConfig } from "configs/reducers/search-config-reducer";
import { searchConfig, editConfig } from "configs/actions";
import EditConfig from "configs/components/edit-config";

class EditConfigPage extends Component {
  static propTypes = {
    getSearchConfig: PropTypes.func,
    loadingConfig: PropTypes.bool,
    config: PropTypes.object,
    match: PropTypes.object,
    getEditConfig: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props.getSearchConfig(this.props.match.params.id);
  }

  render() {
    if (this.props.loadingConfig === true) {
      return (<LoadingIcon />);
    }

    return (
      <div>
        <h1><FormattedMessage id="configs.detail.page.title" /></h1>
        <EditConfig
          config={this.props.config}
          onEdit={value => this.props.getEditConfig(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    config: getConfig(state),
    loadingConfig: getSearching(state),
  }),
  dispatch => ({
    getSearchConfig: id => dispatch(searchConfig(id)),
    getEditConfig: value => dispatch(editConfig(value)),
  }),
);

export default storeConnect(EditConfigPage);
