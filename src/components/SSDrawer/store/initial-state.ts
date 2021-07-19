import { initialState as initialStateForMenuButton } from '../children/SSDrawerMenuButton/store/initial-state'
import SSDrawerComponentState from './interfaces/SSDrawerComponentState'

const initialState: SSDrawerComponentState = {
  menuButton: initialStateForMenuButton,
}

export { initialState }
