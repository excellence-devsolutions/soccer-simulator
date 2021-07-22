import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../provider/interfaces/SSComponentActionValue'
import { actionTypes as actionTypesForMenuButton } from '../children/SSAppBarMenuButton/store/action-types'
import { reducer as reducerForMenuButton } from '../children/SSAppBarMenuButton/store/reducer'
import { actionTypes as actionTypesForTitle } from '../children/SSAppBarTitle/store/action-types'
import { reducer as reducerForTitle } from '../children/SSAppBarTitle/store/reducer'
import SSAppBarComponentProps from './interfaces/SSAppBarComponentProps'

const reducer = (
  state: SSAppBarComponentProps,
  action: SSComponentAction<SSComponentActionValue>
) => {
  const { type } = action

  if (actionTypesForMenuButton.hasOwnProperty(type)) {
    const menuButtonState = reducerForMenuButton(state.menuButton, action)
    const newState = { ...state }
    newState.menuButton = menuButtonState
    return newState
  }

  if (actionTypesForTitle.hasOwnProperty(type)) {
    const titleState = reducerForTitle(state.title, action)
    const newState = { ...state }
    newState.title = titleState
    return newState
  }

  return state
}

export { reducer }
