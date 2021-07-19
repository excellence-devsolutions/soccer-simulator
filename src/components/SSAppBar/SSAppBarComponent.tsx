import { AppBar, Toolbar } from '@material-ui/core'
import clsx from 'clsx'
import React, { useContext } from 'react'
import useStyles from '../../app/styles/styles'
import { SoccerSimulatorContext } from '../../provider/settings'
import { SSAppBarMenuButton } from './children/SSAppBarMenuButton'
import { SSAppBarTitle } from './children/SSAppBarTitle'

const SSAppBarComponent: React.FC = () => {
  const classes = useStyles()
  const { appBar } = useContext(SoccerSimulatorContext)
  const { menuButton } = appBar
  const { isDrawerOpen } = menuButton
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
