import { initialProps as initialPropsForAppBar } from '../../SSAppBar/store/initial-props'
import SSAppBarComponentProps from '../../SSAppBar/store/interfaces/SSAppBarComponentProps'
import { initialProps as initialPropsForDrawer } from '../../SSDrawer/store/initial-props'
import SSDrawerComponentProps from '../../SSDrawer/store/interfaces/SSDrawerComponentProps'
import { initialState } from './initial-state'
import SSNavigationComponentProps from './interfaces/SSNavigationComponentProps'

const initialProps: SSNavigationComponentProps = {
  appBar: {
    ...initialPropsForAppBar,
    ...(initialState.appBar as SSAppBarComponentProps),
  },
  drawer: {
    ...initialPropsForDrawer,
    ...(initialState.drawer as SSDrawerComponentProps),
  },
}

export { initialProps }
