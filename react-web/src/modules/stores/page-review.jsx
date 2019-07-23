import React from 'react'
import { IntlText } from 'touka'


const PageReview = () => (
  <div className="card page-review">
    <div className="card-header">
      <intlText id="stores.review.title" />
    </div>
    <div className="card-body">
      <h5><IntlText id="stores.review.secondary.title" /></h5>
      <p className="btn btn-primary">Go somewhere</p>
    </div>
  </div>
)

export default PageReview
