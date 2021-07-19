import { Dispatch } from 'react'
import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { actionTypes } from './action-types'
import SSDrawerMenuButtonComponentProps from './interfaces/SSDrawerMenuButtonComponentProps'

const getMenuButtonSettings = (
  state: SSDrawerMenuButtonComponentProps,
  dispatch: Dispatch<SSComponentAction<boolean>>
) => {
  return {
    toggleButton: (value: boolean) => {
      const action: SSComponentAction<boolean> = {
        type: actionTypes.TOGGLE_DRAWER_MENU_BUTTON,
        value,
      }
      dispatch(action)
    },
    isDrawerOpen: state.isDrawerOpen,
  }
}

export { getMenuButtonSettings }
