import { Divider, Drawer } from '@material-ui/core'
import React, { useContext } from 'react'
import useStyles from '../../app/styles/styles'
import { SoccerSimulatorContext } from '../../provider/settings'
import { SSDrawerMenuButton } from './children/SSDrawerMenuButton'

const SSDrawerComponent: React.FC = () => {
  const classes = useStyles()
  const { navigation } = useContext(SoccerSimulatorContext)
  const { isDrawerOpen } = navigation.drawer.menuButton

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerHeader}>
        <SSDrawerMenuButton />
        <Divider />
      </div>
    </Drawer>
  )
}

export default SSDrawerComponent
