import { IconButton, useTheme } from '@material-ui/core'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons'
import React, { useContext } from 'react'
import { SoccerSimulatorContext } from '../../../../provider/settings'

const SSDrawerMenuButtonComponent: React.FC = () => {
  const theme = useTheme()
  const { appBar, drawer } = useContext(SoccerSimulatorContext)

  const menuButtonAppBar = appBar.menuButton
  const isDrawerOpenForAppBar = menuButtonAppBar.isDrawerOpen
  const toggleButtonForAppBar = menuButtonAppBar.toggleButton

  const menuButtonDrawer = drawer.menuButton
  const isDrawerOpenForDrawer = menuButtonDrawer.isDrawerOpen
  const toggleButtonForDrawer = menuButtonDrawer.toggleButton
  return (
    <IconButton
      onClick={() => {
        toggleButtonForAppBar(!isDrawerOpenForAppBar)
        toggleButtonForDrawer(!isDrawerOpenForDrawer)
      }}
    >
      {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </IconButton>
  )
}

export default SSDrawerMenuButtonComponent
