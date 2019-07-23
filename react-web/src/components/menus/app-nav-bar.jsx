import React from 'react'
import { PropTypes, IntlText } from 'touka'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import IconWithMenu from 'components/menus/icon-with-menu'
import LateralPanelBar from 'components/menus/lateral-panel-bar'


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}

class AppNavBar extends React.Component {
  state = {
    open: false,
  };

  render() {
    const { classes, menu } = this.props
    const { open } = this.state

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <MenuIcon onClick={() => this.setState({ open: true })} />
            <LateralPanelBar open={open} side="left" onClose={() => this.setState({ open: false })} menu={menu} />
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
            >
              <IntlText id="global.app.title" />
            </Typography>
            <IconWithMenu>
              <AccountCircle />
            </IconWithMenu>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

AppNavBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  })),
}

AppNavBar.defaultProps = {
  menu: [],
}

export default withStyles(styles)(AppNavBar)
