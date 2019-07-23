import React from 'react'
import { PropTypes } from 'touka'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { history } from 'touka/build/routes'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}

const LateralPanelBar = ({
  classes, side, onClose, open, menu,
}) => (
  <Drawer anchor={side} open={open} onClose={() => onClose(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => onClose(false)}
      onKeyDown={() => onClose(false)}
    >
      <div className={(side === 'top' || side === 'bottom') ? classes.fullList : classes.list}>
        <List>
          {menu.map(objMenu => (
            <ListItem button key={objMenu.label} onClick={() => history.push(objMenu.to)}>
              <ListItemText primary={objMenu.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  </Drawer>
)

LateralPanelBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  side: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, to: PropTypes.string })).isRequired,
}

export default withStyles(styles)(LateralPanelBar)
