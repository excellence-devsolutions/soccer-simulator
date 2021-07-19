import SSDrawerListComponentActionTypes from '../../children/SSDrawerList/store/interfaces/SSDrawerListComponentActionTypes'
import SSDrawerListItemComponentActionTypes from '../../children/SSDrawerListItem/store/interfaces/SSDrawerListItemComponentActionTypes'
import SSDrawerMenuButtonComponentActionTypes from '../../children/SSDrawerMenuButton/store/interfaces/SSDrawerMenuButtonComponentActionTypes'

export default interface SSDrawerComponentActionTypes
  extends SSDrawerListComponentActionTypes,
    SSDrawerListItemComponentActionTypes,
    SSDrawerMenuButtonComponentActionTypes {}
