import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import StoreFile from "stores/components/store-file";
import { FormattedMessage } from 'react-intl';

const StoreList = ({stores, searching, onRemove}) => (
  (searching === true) ?
    <p><FormattedMessage id="core.loading" /></p>
    :
    <div className="container">
      <div className="row">
        <LinkButtonBlock
          path="/store/new"
          text="stores.link.new.store"
        />
      </div>
      <div className="row">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col"><FormattedMessage id="stores.field.name" /></th>
              <th scope="col"><FormattedMessage id="core.actions" /></th>
            </tr>
          </thead>
          <tbody>
            { stores.map((store, key) => (<StoreFile store={store} key={key} action={value => onRemove(value)} />)) }
          </tbody>
        </table>
      </div>
    </div>
);

StoreList.propTypes = {
  stores: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default StoreList;
