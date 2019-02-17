import React, { Component } from 'react'
import { intlText } from 'touka/build/i18n'


class PageReview extends Component {
  constructor(props) {
    super(props)
    console.log('hola')
  }

  render() {
    return (
      <div className="card page-review">
        <div className="card-header">
          <intlText id="stores.review.title" />
        </div>
        <div className="card-body">
          <h5><intlText id="stores.review.secondary.title" /></h5>
          <p className="btn btn-primary">Go somewhere</p>
        </div>
      </div>
    )
  }
}

export default PageReview
