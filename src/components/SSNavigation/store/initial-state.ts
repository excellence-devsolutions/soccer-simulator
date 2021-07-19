import { initialState as initialStateForAppBar } from '../../SSAppBar/store/initial-state'
import { initialState as initialStateForDrawer } from '../../SSDrawer/store/initial-state'
import SSNavigationComponentState from './interfaces/SSNavigationComponentState'

const initialState: SSNavigationComponentState = {
  appBar: initialStateForAppBar,
  drawer: initialStateForDrawer,
}

export { initialState }
