import { actionTypes as actionTypesForMenuButton } from '../children/SSAppBarMenuButton/store/action-types'
import { actionTypes as actionTypesForTitle } from '../children/SSAppBarTitle/store/action-types'
import SSAppBarComponentActionTypes from './interfaces/SSAppBarComponentActionTypes'

const actionTypes: SSAppBarComponentActionTypes = {
  ...actionTypesForMenuButton,
  ...actionTypesForTitle,
}

export { actionTypes }
