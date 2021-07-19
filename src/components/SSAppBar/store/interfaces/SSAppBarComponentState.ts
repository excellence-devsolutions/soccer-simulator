import SSAppBarMenuButtonComponentState from '../../children/SSAppBarMenuButton/store/interfaces/SSAppBarMenuButtonComponentState'
import SSAppBarTitleComponentState from '../../children/SSAppBarTitle/store/interfaces/SSAppBarTitleComponentState'

export default interface SSAppBarComponentState {
  menuButton: SSAppBarMenuButtonComponentState
  title: SSAppBarTitleComponentState
}
