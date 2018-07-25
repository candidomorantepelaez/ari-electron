import React from "react";
import PropTypes from "prop-types";
import EditButton from "core/application/components/forms/buttons/edit-button";
import BackButton from "core/application/components/forms/buttons/back-button";
import DeleteButton from "core/application/components/forms/buttons/delete-button";
import ConfigTarget from "configs/components/config-target";

const DetailConfig = ({config, onRemove}) => (
  <div className="row">
    <ConfigTarget
      config={config}
    />
    <EditButton
      path={"/configs/edit/"+config._id}
    />
    <DeleteButton
      title="configs.action.confirm.delete.title"
      text="configs.action.confirm.delete.text"
      id={ config._id }
      action={value => onRemove(value)}
    />
    <BackButton />
  </div>
);

DetailConfig.propTypes = {
  config: PropTypes.object,
  onRemove: PropTypes.func,
}

export default DetailConfig;
