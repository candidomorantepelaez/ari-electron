import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import { map } from "ramda";
import ClientFile from "clients/components/client-file";
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const getFile = (client, key, onRemove) => (<ClientFile client={client} key={key} action={value => onRemove(value)} />);

const getFiles = (list, onRemove) => map((client, key) => getFile(client, key, onRemove), list);

const ClientList = ({list, searching, onRemove, intl}) => (
  (searching === true) ?
    <p><FormattedMessage id="core.loading" /></p>
    :
    <div className="container">
      <div className="row">
        <LinkButtonBlock
          path="/clients/new"
          text={intl.formatMessage({ id: "clients.link.new.client" })}
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
            { getFiles(list) }
          </tbody>
        </table>
      </div>
    </div>
);

ClientList.propTypes = {
  list: PropTypes.array,
  searching: PropTypes.bool,
  onRemove: PropTypes.func,
  intl: intlShape.isRequired,
}

export default injectIntl(ClientList);
