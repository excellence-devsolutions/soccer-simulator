import { initialState as initialStateForNavigation } from '../../components/SSNavigation/store/initial-state'
import SSAppComponentState from './interfaces/SSAppComponentState'

const initialState: SSAppComponentState = {
  navigation: initialStateForNavigation,
}

export { initialState }
