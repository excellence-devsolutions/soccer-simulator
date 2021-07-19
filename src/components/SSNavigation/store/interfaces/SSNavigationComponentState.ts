import SSAppBarComponentState from '../../../SSAppBar/store/interfaces/SSAppBarComponentState'
import SSDrawerComponentState from '../../../SSDrawer/store/interfaces/SSDrawerComponentState'

export default interface SSNavigationComponentState {
  appBar: SSAppBarComponentState
  drawer: SSDrawerComponentState
}
