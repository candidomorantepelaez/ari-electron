import React from "react";
import PropTypes from "prop-types";
import DeleteActionIcon from "core/application/components/forms/buttons/delete-action-icon";
import DetailActionIcon from "core/application/components/forms/buttons/detail-action-icon";
import EditActionIcon from "core/application/components/forms/buttons/edit-action-icon";

const SaleFile = ({ sale, action}) => (
  <tr>
    <td>{ sale.nombre }</td>
    <td>
      <DetailActionIcon
        path={"/sales/detail/"+sale._id}
      />
      <EditActionIcon
        path={"/sales/edit/"+sale._id}
      />
      <DeleteActionIcon
        title="sales.action.confirm.delete.title"
        text="sales.action.confirm.delete.text"
        id={ sale._id }
        action={value => action(value)}
      />
    </td>
  </tr>
);

SaleFile.propTypes = {
  sale: PropTypes.object,
  action: PropTypes.func,
};

export default SaleFile;
