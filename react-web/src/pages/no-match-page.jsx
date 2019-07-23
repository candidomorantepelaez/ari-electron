import React from 'react'
import { IntlText, PropTypes, history } from 'touka'
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
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
  button: {
    display: 'block',
    margin: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
}

const NoMatchPage = ({ classes }) => (
  <MuiThemeProvider theme={basicTheme}>
    <div className={classes.root}>
      <Typography
        variant="h3"
        color="inherit"
        className={classes.grow}
        align="center"
      >
        <IntlText id="global.app.page.no.found.title" />
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => history.push('/')}
        size="large"
      >
        <IntlText id="global.app.page.no.found.text.home" />
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => history.goBack()}
        size="large"
      >
        <IntlText id="global.app.page.no.found.text.back" />
      </Button>
    </div>
  </MuiThemeProvider>
)

NoMatchPage.propTypes = {
  classes: PropTypes.shape({}).isRequired,
}

export default withStyles(styles)(NoMatchPage)
