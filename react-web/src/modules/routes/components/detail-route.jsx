import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import EditButton from "core/application/components/forms/buttons/edit-button";
import BackButton from "core/application/components/forms/buttons/back-button";
import DeleteButton from "core/application/components/forms/buttons/delete-button";

const DetailRoute = ({route, onDelete}) => (
  <div className="row">
    <div className="col-md-12">
      <div className="card tarjeta">
        <div className="card-header">
          {route.nombre}
        </div>
        <div className="card-body">
          <p className="card-text">
            <FormattedMessage id="routes.field.time.range" />: {route.franjaHoraria}
          </p>
          <p className="card-text">
            <FormattedMessage id="routes.field.day" />: {route.dia}
          </p>
        </div>
      </div>
    </div>
    <EditButton
      path={"/routes/edit/"+route._id}
    />
    <DeleteButton
      title="routes.action.confirm.delete.title"
      text="routes.action.confirm.delete.text"
      id={ route._id }
      action={value => onDelete(value)}
    />
    <BackButton />
  </div>
);

DetailRoute.propTypes = {
  route: PropTypes.object,
  onDelete: PropTypes.func,
}

export default DetailRoute;
