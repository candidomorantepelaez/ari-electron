import React from 'react'
import {
  PropTypes, IntlText, loginAction, connect,
} from 'touka'
import { Form } from 'touka-forms'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import basicTheme from 'themes/basic-theme'
import TextField from 'components/forms/text-field'


const styles = () => ({
  paper: {
    marginTop: basicTheme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${basicTheme.spacing.unit * 2}px ${basicTheme.spacing.unit * 3}px ${basicTheme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: basicTheme.spacing.unit,
    backgroundColor: basicTheme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: basicTheme.spacing.unit,
  },
  submit: {
    marginTop: basicTheme.spacing.unit * 3,
  },
})

const LoginComponent = ({ classes, getCredentials }) => (
  <Paper className={classes.paper}>
    <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      <IntlText id="global.login.title" />
    </Typography>
    <Form
      className={classes.form}
      onSubmit={value => getCredentials(value)}
    >
      <TextField
        required
        fullWidth
        name="nif"
        label="global.login.field.nif"
        autoFocus
      />
      <TextField
        required
        fullWidth
        name="password"
        label="global.login.field.password"
        type="password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        <IntlText id="global.login.field.sign.in" />
      </Button>
    </Form>
  </Paper>
)

LoginComponent.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  getCredentials: PropTypes.func.isRequired,
}

const storeConnect = connect(
  () => ({ }),
  dispatch => ({
    getCredentials: credentials => dispatch(loginAction.login(credentials)),
  }),
)

export default withStyles(styles)(storeConnect(LoginComponent))
