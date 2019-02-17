import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import ConfigFile from "configs/components/config-file";
import { FormattedMessage } from 'react-intl';

const ConfigList = ({list, onRemove}) => (
  <div className="container">
    <div className="row">
      <LinkButtonBlock
        path="/configs/new"
        text="configs.link.new.config"
      />
    </div>
    <div className="row">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col"><FormattedMessage id="configs.field.name" /></th>
            <th scope="col"><FormattedMessage id="core.actions" /></th>
          </tr>
        </thead>
        <tbody>
          { list.map((config, key) => (<ConfigFile config={config} key={key} action={value => onRemove(value)} />)) }
        </tbody>
      </table>
    </div>
  </div>
);

ConfigList.propTypes = {
  list: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default ConfigList;
