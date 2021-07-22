import SSComponentAction from '../../../../../provider/interfaces/SSComponentAction'
import { SSComponentActionValue } from '../../../../../provider/interfaces/SSComponentActionValue'
import { actionTypes } from './action-types'
import { initialState } from './initial-state'
import SSAppBarTitleComponentProps from './interfaces/SSAppBarTitleComponentProps'

const { RESET_APP_BAR_TITLE_TEXT, SET_APP_BAR_TITLE_TEXT } = actionTypes

const reducer = (
  state: SSAppBarTitleComponentProps,
  action: SSComponentAction<SSComponentActionValue>
) => {
  const { type, value } = action
  const newState = { ...state }
  switch (type) {
    case RESET_APP_BAR_TITLE_TEXT:
      newState.text = initialState.text
      return newState
    case SET_APP_BAR_TITLE_TEXT:
      newState.text = value as string
      return newState
    default:
      return state
  }
}

export { reducer }
