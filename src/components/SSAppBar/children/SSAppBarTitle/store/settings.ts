import { Dispatch } from 'react'
import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../../../provider/interfaces/SSComponentActionValue'
import { actionTypes } from './action-types'
import SSAppBarTitleComponentProps from './interfaces/SSAppBarTitleComponentProps'

const getTitleSettings = (
  state: SSAppBarTitleComponentProps,
  dispatch: Dispatch<SSComponentAction<SSComponentActionValue>>
) => {
  return {
    resetText: () => {
      const action: SSComponentAction<void> = {
        type: actionTypes.RESET_APP_BAR_TITLE_TEXT,
      }
      dispatch(action)
    },
    setText: (value: string) => {
      const action: SSComponentAction<string> = {
        type: actionTypes.SET_APP_BAR_TITLE_TEXT,
        value,
      }
      dispatch(action)
    },
    text: state.text,
  }
}

export { getTitleSettings }
