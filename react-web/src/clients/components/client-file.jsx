import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from 'react-intl';
import DeleteButtonIcon from "core/application/components/forms/buttons/delete-button-icon";
import { FaEdit } from "react-icons/lib/fa";
import { MdAccountBox } from "react-icons/lib/md";
import { Link } from "react-router-dom";

const ClientFile = ({ client, action, intl}) => (
  <tr>
    <td>{ client.nombre }</td>
    <td>{ client.ruta.nombre }</td>
    <td>{ client.numeroBotellas }</td>
    <td>
      <Link
        to={"/clients/detail/"+client._id}
        data-toggle="tooltip"
        data-placement="top"
        title={intl.formatMessage({ id: "core.detail" })}
      >
        <MdAccountBox className="icono" />
      </Link>
      <Link
        to={"/clients/edit/"+client._id}
        data-toggle="tooltip"
        data-placement="top"
        title={intl.formatMessage({ id: "core.edit" })}
      >
        <FaEdit className="icono" />
      </Link>
      <DeleteButtonIcon
        title={intl.formatMessage({ id: "clients.action.confirm.delete.title" })}
        text={intl.formatMessage({ id: "clients.action.confirm.delete.text" })}
        id={ client._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
);

ClientFile.propTypes = {
  client: PropTypes.object,
  action: PropTypes.func,
  intl: intlShape.isRequired,
}

export default injectIntl(ClientFile);
