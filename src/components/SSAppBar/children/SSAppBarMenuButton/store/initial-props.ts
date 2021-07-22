import { initialState } from './initial-state'
import SSAppBarMenuButtonComponentProps from './interfaces/SSAppBarMenuButtonComponentProps'

const initialProps: SSAppBarMenuButtonComponentProps = {
  ...initialState,
  toggleButton: (isDrawerOpen: boolean) => {
    console.log(isDrawerOpen)
  },
}

export { initialProps }
