import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const RouteFile = ({ route, action}) => (
  <tr>
    <td>{ route.dia }</td>
    <td>{ route.nombre }</td>
    <td>{ route.franjaHoraria }</td>
    <td>
      <DetailActionIcon
        path={"/routes/detail/"+route._id}
      />
      <EditActionIcon
        path={"/routes/edit/"+route._id}
      />
      <DeleteActionIcon
        title="routes.action.confirm.delete.title"
        text="routes.action.confirm.delete.text"
        id={ route._id }
        action={value => action(value)}
      />
    </td>
  </tr>
);

RouteFile.propTypes = {
  route: PropTypes.object,
  action: PropTypes.func,
};

export default RouteFile;
