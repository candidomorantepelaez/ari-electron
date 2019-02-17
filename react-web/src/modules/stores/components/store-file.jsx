import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const StoreFile = ({ store, action, intl}) => (
  <tr>
    <td>{ store.name }</td>
    <td>
      <DetailActionIcon
        path={"/store/detail/"+store._id}
      />
      <EditActionIcon
        path={"/store/edit/"+store._id}
      />
      <DeleteActionIcon
        title="stores.action.confirm.delete.title"
        text="stores.action.confirm.delete.text"
        id={ store._id }
        action={(value) => action(value)}
      />
    </td>
  </tr>
);

StoreFile.propTypes = {
  store: PropTypes.object,
  action: PropTypes.func,
}

export default StoreFile;
