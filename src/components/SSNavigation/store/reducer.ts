import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { actionTypes as actionTypesForAppBar } from '../../SSAppBar/store/action-types'
import { reducer as reducerForAppBar } from '../../SSAppBar/store/reducer'
import { actionTypes as actionTypesForDrawer } from '../../SSDrawer/store/action-types'
import { reducer as reducerForDrawer } from '../../SSDrawer/store/reducer'
import SSNavigationComponentProps from './interfaces/SSNavigationComponentProps'

const reducer = (
  state: SSNavigationComponentProps,
  action: SSComponentAction<string | boolean>
) => {
  const { type } = action

  if (actionTypesForAppBar.hasOwnProperty(type)) {
    const appBarState = reducerForAppBar(state.appBar, action)
    const newState = { ...state }
    newState.appBar = appBarState
    return newState
  }

  if (actionTypesForDrawer.hasOwnProperty(type)) {
    const drawerState = reducerForDrawer(
      state.drawer,
      action as SSComponentAction<boolean>
    )
    const newState = { ...state }
    newState.drawer = drawerState
    return newState
  }

  return state
}

export { reducer }
