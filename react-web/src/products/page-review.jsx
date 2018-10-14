import React, { Component } from "react";
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
          Productos
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  }
}

export default withAuthentication(PageReview, { role: "SELLER_ROLE" });