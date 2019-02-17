import React, { Component } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import ConfigList from "configs/components/config-list";
import { connect } from "react-redux";
import { searchConfigs, deleteConfig } from "configs/actions";
import { getSearching, getConfigs } from "configs/reducers/search-configs-reducer";
import LoadingIcon from "core/application/components/iconos/loading-icon";

class ListConfigsPage extends Component {
  static propTypes = {
    searching: PropTypes.bool,
    configs: PropTypes.array,
    getSearch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.props.getSearch();
  }

  render() {
    if (this.props.searching === true) {
      return <LoadingIcon />
    }

    return (
      <div>
        <h3><FormattedMessage id="configs.list.page.title" /></h3>
        <ConfigList
          list={this.props.configs}
          onRemove={value => this.props.onRemove(value)}
        />
      </div>
    );
  }
}

const storeConnect = connect(
  state => ({
    searching: getSearching(state),
    configs: getConfigs(state),
  }),
  dispatch => ({
    getSearch: () => dispatch(searchConfigs()),
    onRemove: (id) => dispatch(deleteConfig(id)),
  }),
);

export default storeConnect(ListConfigsPage);