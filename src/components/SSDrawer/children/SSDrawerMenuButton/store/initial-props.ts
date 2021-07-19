import { initialState } from './initial-state'

const initialProps = {
  ...initialState,
  toggleButton: (isDrawerOpen: boolean) => {
    console.log(isDrawerOpen)
  },
}

export { initialProps }
