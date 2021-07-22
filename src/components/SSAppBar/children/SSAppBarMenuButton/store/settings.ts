import { Dispatch } from 'react'
import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../../../provider/interfaces/SSComponentActionValue'
import { actionTypes } from './action-types'
import SSAppBarMenuButtonComponentProps from './interfaces/SSAppBarMenuButtonComponentProps'

const getMenuButtonSettings = (
  state: SSAppBarMenuButtonComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  return {
    toggleButton: (value: boolean) => {
      const action: SSComponentAction<boolean> = {
        type: actionTypes.TOGGLE_APP_BAR_MENU_BUTTON,
        value,
      }
      dispatch(action)
    },
    isDrawerOpen: state.isDrawerOpen,
  }
}

export { getMenuButtonSettings }
