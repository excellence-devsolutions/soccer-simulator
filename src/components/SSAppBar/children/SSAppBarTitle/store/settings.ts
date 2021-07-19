import { Dispatch } from 'react'
import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { actionTypes } from './action-types'
import SSAppBarTitleComponentProps from './interfaces/SSAppBarTitleComponentProps'

const getTitleSettings = (
  state: SSAppBarTitleComponentProps,
  dispatch: Dispatch<SSComponentAction<string>>
) => {
  return {
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
