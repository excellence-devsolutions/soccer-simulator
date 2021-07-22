import { Reducer, useReducer } from 'react'
import SSNavigationComponentProps from '../components/SSNavigation/store/interfaces/SSNavigationComponentProps'
import SSComponentAction from './interfaces/SSComponentAction'
import { SSComponentActionValue } from './interfaces/SSComponentActionValue'
import {
  getSettings,
  initialProps,
  reducer,
  SoccerSimulatorContext,
} from './settings'

const Provider = (props: { children: JSX.Element | JSX.Element[] }) => {
  const { children } = props
  const theReducer = reducer as Reducer<
    SSNavigationComponentProps,
    SSComponentAction<SSComponentActionValue>
  >
  const theInitialProps = initialProps as SSNavigationComponentProps
  const [state, dispatch] = useReducer(theReducer, theInitialProps)

  const value = getSettings(state, dispatch)

  return (
    <SoccerSimulatorContext.Provider value={value}>
      {children}
    </SoccerSimulatorContext.Provider>
  )
}

export { SoccerSimulatorContext }

export default Provider
