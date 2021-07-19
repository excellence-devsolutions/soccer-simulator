import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { actionTypes } from './action-types'
import SSAppBarTitleComponentProps from './interfaces/SSAppBarTitleComponentProps'

const { SET_APP_BAR_TITLE_TEXT } = actionTypes

const reducer = (
  state: SSAppBarTitleComponentProps,
  action: SSComponentAction<string>
) => {
  const { type, value } = action
  const newState = { ...state }
  switch (type) {
    case SET_APP_BAR_TITLE_TEXT:
      newState.text = value
      return newState
    default:
      return state
  }
}

export { reducer }
