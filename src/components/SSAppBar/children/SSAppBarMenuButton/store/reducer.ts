import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { actionTypes } from './action-types'
import SSAppBarMenuButtonComponentProps from './interfaces/SSAppBarMenuButtonComponentProps'

const { TOGGLE_APP_BAR_MENU_BUTTON } = actionTypes

const reducer = (
  state: SSAppBarMenuButtonComponentProps,
  action: SSComponentAction<boolean>
) => {
  const { type, value } = action
  const newState = { ...state }
  switch (type) {
    case TOGGLE_APP_BAR_MENU_BUTTON:
      newState.isDrawerOpen = value
      return newState
    default:
      return state
  }
}

export { reducer }
