import React from "react";
import LinkButtonBlock from "core/application/components/forms/buttons/link-button";
import PropTypes from "prop-types";
import RouteFile from "routes/components/route-file";
import { FormattedMessage } from "react-intl";

const ListRoutes = ({routes, onDelete}) => (
  <div className="container">
    <div className="row">
      <LinkButtonBlock
        path="/routes/new"
        text="routes.link.new.route"
      />
    </div>
    <div className="row">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col"><FormattedMessage id="routes.field.day" /></th>
            <th scope="col"><FormattedMessage id="routes.field.name" /></th>
            <th scope="col"><FormattedMessage id="routes.field.time.range" /></th>
            <th scope="col"><FormattedMessage id="core.actions" /></th>
          </tr>
        </thead>
        <tbody>
          { routes.map((route, key) =>
            <RouteFile route={route} key={key} action={value => onDelete(value)} />)
          }
        </tbody>
      </table>
    </div>
  </div>
);

ListRoutes.propTypes = {
  routes: PropTypes.array,
  onDelete: PropTypes.func,
}

export default ListRoutes;
