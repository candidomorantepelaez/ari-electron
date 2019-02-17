import React from "react";
import PropTypes from "prop-types";
import EditButton from "core/application/components/forms/buttons/edit-button";
import BackButton from "core/application/components/forms/buttons/back-button";
import DeleteButton from "core/application/components/forms/buttons/delete-button";
import SaleTarget from "sales/components/sale-target";

const DetailSale = ({sale, onRemove}) => (
  <div className="row">
    <SaleTarget
      sale={sale}
    />
    <EditButton
      path={"/sales/edit/"+sale._id}
    />
    <DeleteButton
      title="sales.action.confirm.delete.title"
      text="sales.action.confirm.delete.text"
      id={ sale._id }
      action={value => onRemove(value)}
    />
    <BackButton />
  </div>
);

DetailSale.propTypes = {
  sale: PropTypes.object,
  onRemove: PropTypes.func,
}

export default DetailSale;
