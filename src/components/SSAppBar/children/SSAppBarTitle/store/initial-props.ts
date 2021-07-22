import { initialState } from './initial-state'
import SSAppBarTitleComponentProps from './interfaces/SSAppBarTitleComponentProps'

const initialProps: SSAppBarTitleComponentProps = {
  ...initialState,
  resetText: () => {
    console.log('reset text')
  },
  setText: (text: string) => {
    console.log(text)
  },
}

export { initialProps }
