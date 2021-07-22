import { Dispatch } from 'react'
import { getNavigationSettings } from '../../components/SSNavigation/store/settings'
import SSComponentAction from '../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../provider/interfaces/SSComponentActionValue'
import SSAppComponentProps from './interfaces/SSAppComponentProps'

const getAppSettings = (
  state: SSAppComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  const navigationSettings = getNavigationSettings(state.navigation, dispatch)
  return {
    navigation: { ...navigationSettings },
  }
}

export { getAppSettings }
