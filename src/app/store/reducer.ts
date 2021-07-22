import { actionTypes as actionTypesForNavigation } from '../../components/SSNavigation/store/action-types'
import { reducer as reducerForNavigation } from '../../components/SSNavigation/store/reducer'
import SSComponentAction from '../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../provider/interfaces/SSComponentActionValue'
import SSAppComponentProps from './interfaces/SSAppComponentProps'

const reducer = (
  state: SSAppComponentProps,
  action: SSComponentAction<SSComponentActionValue>
) => {
  const { type } = action

  if (actionTypesForNavigation.hasOwnProperty(type)) {
    const navigationState = reducerForNavigation(state.navigation, action)
    const newState = { ...state }
    newState.navigation = navigationState
    return newState
  }
}

export { reducer }
