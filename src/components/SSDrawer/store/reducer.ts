import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { actionTypes as actionTypesForMenuButton } from '../../SSDrawer/children/SSDrawerMenuButton/store/action-types'
import { reducer as reducerForMenuButton } from '../../SSDrawer/children/SSDrawerMenuButton/store/reducer'
import SSDrawerComponentProps from './interfaces/SSDrawerComponentProps'

const reducer = (
  state: SSDrawerComponentProps,
  action: SSComponentAction<boolean>
) => {
  const { type } = action

  if (actionTypesForMenuButton.hasOwnProperty(type)) {
    const menuButtonState = reducerForMenuButton(
      state.menuButton,
      action as SSComponentAction<boolean>
    )
    const newState = { ...state }
    newState.menuButton = menuButtonState
    return newState
  }

  return state
}

export { reducer }
