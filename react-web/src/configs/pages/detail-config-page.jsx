import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import LoadingIcon from "core/application/components/iconos/loading-icon";
import { getSearching, getConfig } from "configs/reducers/search-config-reducer";
import { searchConfig, deleteConfig } from "configs/actions";
import DetailConfig from "configs/components/detail-config";

class DetailConfigPage extends Component {
  static propTypes = {
    getSearchConfig: PropTypes.func,
    loading: PropTypes.bool,
    config: PropTypes.object,
    match: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.props.getSearchConfig(this.props.match.params.id);
  }

  render() {
    if (this.props.loading === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h1><FormattedMessage id="configs.detail.page.title" /></h1>
        <DetailConfig
          config={this.props.config}
          onRemove={id => this.props.removeonfig(id)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    config: getConfig(state),
    loading: getSearching(state),
  }),
  dispatch => ({
    getSearchConfig: id => dispatch(searchConfig(id)),
    removeConfig: id => dispatch(deleteConfig(id)),
  }),
);

export default storeConnect(DetailConfigPage);
