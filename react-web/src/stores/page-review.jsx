import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import withAuthentication from "core/application/hoc/withAuthentication";

class PageReview extends Component {
  constructor(props) {
    super(props);
    console.log("hola");
  }

  render() {
    return (
      <div className="card page-review">
        <div className="card-header">
          <FormattedMessage id="stores.review.title" />
        </div>
        <div className="card-body">
          <h5><FormattedMessage id="stores.review.secondary.title" /></h5>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default withAuthentication(PageReview, { role: "ADMIN_ROLE" });