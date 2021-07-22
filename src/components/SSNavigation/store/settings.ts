import { Dispatch } from 'react'
import SSComponentAction from '../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../provider/interfaces/SSComponentActionValue'
import { getAppBarSettings } from '../../SSAppBar/store/settings'
import { getDrawerSettings } from '../../SSDrawer/store/settings'
import SSNavigationComponentProps from './interfaces/SSNavigationComponentProps'

const getNavigationSettings = (
  state: SSNavigationComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  const appBarSettings = getAppBarSettings(state.appBar, dispatch)
  const drawerSettings = getDrawerSettings(state.drawer, dispatch)
  return {
    appBar: { ...appBarSettings },
    drawer: { ...drawerSettings },
  }
}

export { getNavigationSettings }
