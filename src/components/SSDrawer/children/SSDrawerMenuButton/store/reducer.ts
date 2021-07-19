import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { actionTypes } from './action-types'
import SSDrawerMenuButtonComponentProps from './interfaces/SSDrawerMenuButtonComponentProps'

const { TOGGLE_DRAWER_MENU_BUTTON } = actionTypes

const reducer = (
  state: SSDrawerMenuButtonComponentProps,
  action: SSComponentAction<boolean>
) => {
  const { type, value } = action
  const newState = { ...state }
  switch (type) {
    case TOGGLE_DRAWER_MENU_BUTTON:
      newState.isDrawerOpen = value
      return newState
    default:
      return state
  }
}

export { reducer }
