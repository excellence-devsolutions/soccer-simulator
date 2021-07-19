import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { actionTypes as actionTypesForMenuButton } from '../children/SSAppBarMenuButton/store/action-types'
import { reducer as reducerForMenuButton } from '../children/SSAppBarMenuButton/store/reducer'
import { actionTypes as actionTypesForTitle } from '../children/SSAppBarTitle/store/action-types'
import { reducer as reducerForTitle } from '../children/SSAppBarTitle/store/reducer'
import SSAppBarComponentProps from './interfaces/SSAppBarComponentProps'

const reducer = (
  state: SSAppBarComponentProps,
  action: SSComponentAction<string | boolean>
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

  if (actionTypesForTitle.hasOwnProperty(type)) {
    const titleState = reducerForTitle(
      state.title,
      action as SSComponentAction<string>
    )
    const newState = { ...state }
    newState.title = titleState
    return newState
  }

  return state
}

export { reducer }
