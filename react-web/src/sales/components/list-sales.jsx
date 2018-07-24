import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import SaleFile from "sales/components/sale-file";
import { FormattedMessage } from "react-intl";

const ListSales = ({sales, onDelete}) => (
  <div className="container">
    <div className="row">
      <LinkButtonBlock
        path="/sales/new"
        text="sales.link.new.route"
      />
    </div>
    <div className="row">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col"><FormattedMessage id="sales.field.name" /></th>
          </tr>
        </thead>
        <tbody>
          { sales.map((sale, key) =>
            <SaleFile sale={sale} key={key} action={value => onDelete(value)} />)
          }
        </tbody>
      </table>
    </div>
  </div>
);

ListSales.propTypes = {
  sales: PropTypes.array,
  onDelete: PropTypes.func,
}

export default ListSales;
