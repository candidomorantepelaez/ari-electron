import React from 'react'
import { PropTypes } from 'touka'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import basicTheme from 'themes/basic-theme'
import LoginComponent from 'components/login/login-component'


const styles = () => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: basicTheme.spacing.unit * 3,
    marginRight: basicTheme.spacing.unit * 3,
    [basicTheme.breakpoints.up(400 + basicTheme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})

const SignIn = ({ classes }) => (
  <MuiThemeProvider theme={basicTheme}>
    <div className={classes.main}>
      <CssBaseline />
      <LoginComponent />
    </div>
  </MuiThemeProvider>
)

SignIn.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(SignIn)
