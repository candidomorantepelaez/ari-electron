import React, { Component } from 'react'
import {
  PropTypes, IntlText, withAuthentication, history, loginAction,
  connect,
} from 'touka'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import basicTheme from 'themes/basic-theme'


const styles = {
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  grow: {
    flexGrow: 1,
    marginTop: 20,
  },
}


class LogoutPage extends Component {
  static propTypes = {
    getLogout: PropTypes.func.isRequired,
    classes: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props)
    props.getLogout()
  }

  render() {
    const { classes } = this.props
    return (
      <MuiThemeProvider theme={basicTheme}>
        <CssBaseline />
        <Typography
          variant="h3"
          color="inherit"
          className={classes.grow}
          align="center"
        >
          <IntlText id="global.app.title" />
        </Typography>
      </MuiThemeProvider>
    )
  }
}

const storeConnect = connect(
  () => ({ }),
  dispatch => ({
    getLogout: () => dispatch(loginAction.logout()),
  })
)

export default withAuthentication(withStyles(styles)(storeConnect(LogoutPage)), {
  roles: ['ADMIN_ROLE'],
  onAuthenticationFailed: () => {
    history.push('/login')
    return null
  },
})
