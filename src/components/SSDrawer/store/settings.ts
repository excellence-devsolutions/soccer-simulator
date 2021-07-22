import { Dispatch } from 'react'
import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../provider/interfaces/SSComponentActionValue'
import { getMenuButtonSettings } from '../children/SSDrawerMenuButton/store/settings'
import SSDrawerComponentProps from './interfaces/SSDrawerComponentProps'

const getDrawerSettings = (
  state: SSDrawerComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  const menuButtonSettings = getMenuButtonSettings(state.menuButton, dispatch)
  return {
    menuButton: { ...menuButtonSettings },
  }
}

export { getDrawerSettings }
