import { Dispatch } from 'react'
import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../provider/interfaces/SSComponentActionValue'
import { getMenuButtonSettings } from '../children/SSAppBarMenuButton/store/settings'
import { getTitleSettings } from '../children/SSAppBarTitle/store/settings'
import SSAppBarComponentProps from './interfaces/SSAppBarComponentProps'

const getAppBarSettings = (
  state: SSAppBarComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  const menuButtonSettings = getMenuButtonSettings(state.menuButton, dispatch)
  const titleSettings = getTitleSettings(state.title, dispatch)
  return {
    menuButton: { ...menuButtonSettings },
    title: { ...titleSettings },
  }
}

export { getAppBarSettings }
