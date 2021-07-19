import { initialState as initialStateForMenuButton } from '../children/SSAppBarMenuButton/store/initial-state'
import { initialState as initialStateForTitle } from '../children/SSAppBarTitle/store/initial-state'
import SSAppBarComponentState from './interfaces/SSAppBarComponentState'

const initialState: SSAppBarComponentState = {
  menuButton: initialStateForMenuButton,
  title: initialStateForTitle,
}

export { initialState }
