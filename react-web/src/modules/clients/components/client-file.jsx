import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const ClientFile = ({ client, action, intl}) => (
  <tr>
    <td>{ client.nombre }</td>
    <td>{ client.ruta.nombre }</td>
    <td>{ client.numeroBotellas }</td>
    <td>
      <DetailActionIcon
        path={"/clients/detail/"+client._id}
      />
      <EditActionIcon
        path={"/clients/edit/"+client._id}
      />
      <DeleteActionIcon
        title="clients.action.confirm.delete.title"
        text="clients.action.confirm.delete.text"
        id={ client._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
)

ClientFile.propTypes = {
  client: PropTypes.object,
  action: PropTypes.func,
}

export default ClientFile;
