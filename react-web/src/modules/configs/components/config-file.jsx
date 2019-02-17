import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const ConfigFile = ({ config, action, intl}) => (
  <tr>
    <td>{ config.nombre }</td>
    <td>
      <DetailActionIcon
        path={"/configs/detail/"+config._id}
      />
      <EditActionIcon
        path={"/configs/edit/"+config._id}
      />
      <DeleteActionIcon
        title="configs.action.confirm.delete.title"
        text="configs.action.confirm.delete.text"
        id={ config._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
);

ConfigFile.propTypes = {
  config: PropTypes.object,
  action: PropTypes.func,
}

export default ConfigFile;