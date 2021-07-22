import { initialState } from './initial-state'
import SSDrawerMenuButtonComponentProps from './interfaces/SSDrawerMenuButtonComponentProps'

const initialProps: SSDrawerMenuButtonComponentProps = {
  ...initialState,
  toggleButton: (isDrawerOpen: boolean) => {
    console.log(isDrawerOpen)
  },
}

export { initialProps }
