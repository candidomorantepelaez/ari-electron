import React from 'react'
import PropTypes from 'prop-types'
import { MuiThemeProvider } from '@material-ui/core/styles'
import basicTheme from 'themes/basic-theme'
import AppNavBar from 'components/menus/app-nav-bar'


const MenuComponent = ({
  menu,
}) => (
  <MuiThemeProvider theme={basicTheme}>
    <AppNavBar menu={menu} />
  </MuiThemeProvider>
)

MenuComponent.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    to: PropTypes.string,
  })).isRequired,
}

export default MenuComponent
