import { AppBar, Toolbar } from '@material-ui/core'
import clsx from 'clsx'
import React, { useContext } from 'react'
import useStyles from '../../app/styles/styles'
import { SoccerSimulatorContext } from '../../provider/settings'
import { SSAppBarMenuButton } from './children/SSAppBarMenuButton'
import { SSAppBarTitle } from './children/SSAppBarTitle'

const SSAppBarComponent: React.FC = () => {
  const classes = useStyles()
  const { navigation } = useContext(SoccerSimulatorContext)
  const { isDrawerOpen } = navigation.appBar.menuButton
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, { [classes.appBarShift]: isDrawerOpen })}
    >
      <Toolbar>
        <SSAppBarMenuButton />
        <SSAppBarTitle />
      </Toolbar>
    </AppBar>
  )
}

export default SSAppBarComponent
