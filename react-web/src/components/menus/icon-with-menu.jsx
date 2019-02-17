import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { map, addIndex } from 'ramda'
import { history } from 'touka/build/routes'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'


const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class IconWithMenu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    })),
    classes: PropTypes.shape({}).isRequired,
    children: PropTypes.shape({}).isRequired,
  }

  static defaultProps = {
    menu: [{
      label: 'Clientes',
      to: '/clientes',
    }],
  }

  constructor(props) {
    super(props)
    this.handleMenu = this.handleMenu.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      open: false,
      element: null,
    }
  }

  handleMenu = (event) => {
    const { open } = this.state
    this.setState({ open: !open, element: event.currentTarget })
  }

  handleClose = (path) => {
    this.setState({ open: false, element: null },
      () => {
        if (path) {
          history.push(path)
        }
      })
  }

  render() {
    const { menu, classes, children } = this.props
    const { open, element } = this.state
    return (
      <Fragment>
        <IconButton
          ref={this.input}
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          aria-owns={open ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.handleMenu}
        >
          {children}
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={element}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={() => this.handleClose()}
        >
          {addIndex(map)((objMenu, index) => (<MenuItem onClick={() => this.handleClose(objMenu.to)} key={index}>{objMenu.label}</MenuItem>), menu)}
        </Menu>
      </Fragment>
    )
  }
}

export default withStyles(styles)(IconWithMenu)
