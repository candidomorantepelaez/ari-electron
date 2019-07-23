import React from 'react'
import {
  IntlText, PropTypes, withAuthentication, history,
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

const HomePage = ({ classes }) => (
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

HomePage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withAuthentication(withStyles(styles)(HomePage), {
  roles: ['ADMIN_ROLE'],
  onAuthenticationFailed: () => {
    history.push('/login')
    return null
  },
})
