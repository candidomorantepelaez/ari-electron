import React  from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

const SaleTarget = ({ sale }) => (
  <div className="col-md-12">
    <div className="card tarjeta">
      <div className="card-header">
        {sale.nombre}
      </div>
      <div className="card-body">
        <p className="card-text">
          <FormattedMessage id="sales.field.name" />: {sale.nombre}
        </p>
      </div>
    </div>
  </div>
);

SaleTarget.propTypes = {
  sale: PropTypes.object,
};

export default SaleTarget;
