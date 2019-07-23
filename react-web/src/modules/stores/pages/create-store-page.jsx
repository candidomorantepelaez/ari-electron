import React, { Component } from 'react'
import {
  PropTypes, IntlText, connect, withAuthentication,
} from 'touka'


class CreateStorePage extends Component {
  static propTypes = {
    currentUser: PropTypes.shape({}),
    loading: PropTypes.boolean,
  }

  static defaultProps = {
    currentUser: {},
    loading: false,
  }

  constructor(props) {
    super(props)
    console.log('hola')
  }

  render() {
    const { loading } = this.props
    if (loading === true) {
      return <p>Cargando...</p>
    }

    return (
      <div>
        <h1><IntlText id="stores.create.page.title" /></h1>
      </div>
    )
  }
}

const storeConnect = connect(
  () => ({

  }),
  () => ({

  }),
)

export default withAuthentication(storeConnect(CreateStorePage), { role: 'ADMIN_ROLE' })
