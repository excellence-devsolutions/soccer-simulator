import { initialState } from './initial-state'

const initialProps = {
  ...initialState,
  setText: (text: string) => {
    console.log(text)
  },
}

export { initialProps }
