import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React, { useContext } from 'react'
import useStyles from '../../../../app/styles/styles'
import { SoccerSimulatorContext } from '../../../../provider/Provider'

const SSAppBarMenuButtonComponent: React.FC = () => {
  const classes = useStyles()
  const { navigation } = useContext(SoccerSimulatorContext)

  const menuButtonAppBar = navigation.appBar.menuButton
  const isDrawerOpenForAppBar = menuButtonAppBar.isDrawerOpen
  const toggleButtonForAppBar = menuButtonAppBar.toggleButton

  const menuButtonDrawer = navigation.drawer.menuButton
  const isDrawerOpenForDrawer = menuButtonDrawer.isDrawerOpen
  const toggleButtonForDrawer = menuButtonDrawer.toggleButton
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => {
        toggleButtonForAppBar(!isDrawerOpenForAppBar)
        toggleButtonForDrawer(!isDrawerOpenForDrawer)
      }}
      edge="start"
      className={clsx(
        classes.menuButton,
        isDrawerOpenForAppBar && classes.hide,
        'ss-app-bar-menu-button'
      )}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default SSAppBarMenuButtonComponent
