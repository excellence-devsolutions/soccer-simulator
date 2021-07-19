import SSAppBarMenuButtonComponentState from './SSAppBarMenuButtonComponentState'

export default interface SSAppBarMenuButtonComponentProps
  extends SSAppBarMenuButtonComponentState {
  toggleButton(value: boolean): void
}
