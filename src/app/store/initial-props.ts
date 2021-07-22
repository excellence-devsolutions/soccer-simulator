import { initialProps as initialPropsForNavigation } from '../../components/SSNavigation/store/initial-props'
import SSNavigationComponentProps from '../../components/SSNavigation/store/interfaces/SSNavigationComponentProps'
import { initialState } from './initial-state'
import SSAppComponentProps from './interfaces/SSAppComponentProps'

const initialProps: SSAppComponentProps = {
  navigation: {
    ...initialPropsForNavigation,
    ...(initialState.navigation as SSNavigationComponentProps),
  },
}

export { initialProps }
