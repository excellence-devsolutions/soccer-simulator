import { actionTypes as actionTypesForAppBar } from '../../SSAppBar/store/action-types'
import { actionTypes as actionTypesForDrawer } from '../../SSDrawer/store/action-types'
import SSNavigationComponentActionTypes from './interfaces/SSNavigationComponentActionTypes'

const actionTypes: SSNavigationComponentActionTypes = {
  ...actionTypesForAppBar,
  ...actionTypesForDrawer,
}

export { actionTypes }
