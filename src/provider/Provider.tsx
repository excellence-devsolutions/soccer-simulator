import { Reducer, useReducer } from 'react'
import SSNavigationComponentProps from '../components/SSNavigation/store/interfaces/SSNavigationComponentProps'
import SSComponentAction from './interfaces/SSComponentAction'
import {
  getNavigationSettings,
  initialProps,
  reducer,
  SoccerSimulatorContext,
} from './settings'

const Provider = (props: { children: JSX.Element | JSX.Element[] }) => {
  const { children } = props
  const [state, dispatch] = useReducer<
    Reducer<SSNavigationComponentProps, SSComponentAction<string | boolean>>
  >(reducer, initialProps)

  const value = getNavigationSettings(state, dispatch)

  return (
    <SoccerSimulatorContext.Provider value={value}>
      {children}
    </SoccerSimulatorContext.Provider>
  )
}

export { SoccerSimulatorContext }

export default Provider
