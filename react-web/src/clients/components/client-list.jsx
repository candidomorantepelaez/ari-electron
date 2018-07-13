import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import ClientFile from "clients/components/client-file";
import { FormattedMessage } from 'react-intl';

const ClientList = ({list, searching, onRemove}) => (
  (searching === true) ?
    <p><FormattedMessage id="core.loading" /></p>
    :
    <div className="container">
      <div className="row">
        <LinkButtonBlock
          path="/clients/new"
          text="clients.link.new.client"
        />
      </div>
      <div className="row">
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col"><FormattedMessage id="clients.field.name" /></th>
              <th scope="col"><FormattedMessage id="clients.field.service.route" /></th>
              <th scope="col"><FormattedMessage id="clients.field.service.bottles" /></th>
              <th scope="col"><FormattedMessage id="core.actions" /></th>
            </tr>
          </thead>
          <tbody>
            { list.map((client, key) => (<ClientFile client={client} key={key} action={value => onRemove(value)} />)) }
          </tbody>
        </table>
      </div>
    </div>
);

ClientList.propTypes = {
  list: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
}

export default ClientList;
