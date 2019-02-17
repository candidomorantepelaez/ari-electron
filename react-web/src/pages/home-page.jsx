import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import basicTheme from 'themes/basic-theme'


class HomePage extends Component {
  constructor(props) {
    super(props)
    console.log('hola')
  }

  render() {
    return (
      <MuiThemeProvider theme={basicTheme}>
        <h1>Hola</h1>
      </MuiThemeProvider>
    )
  }
}

const storeConnect = connect(
  state => ({

  }),
  dispatch => ({

  }),
)

export default storeConnect(HomePage)
