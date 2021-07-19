import { actionTypes as actionTypesForList } from '../children/SSDrawerList/store/action-types'
import { actionTypes as actionTypesForListItem } from '../children/SSDrawerListItem/store/action-types'
import { actionTypes as actionTypesForMenuButton } from '../children/SSDrawerMenuButton/store/action-types'
import SSDrawerComponentActionTypes from './interfaces/SSDrawerComponentActionTypes'

const actionTypes: SSDrawerComponentActionTypes = {
  ...actionTypesForList,
  ...actionTypesForListItem,
  ...actionTypesForMenuButton,
}

export { actionTypes }
