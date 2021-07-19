import SSDrawerMenuButtonComponentState from './SSDrawerMenuButtonComponentState'

export default interface SSDrawerMenuButtonComponentProps
  extends SSDrawerMenuButtonComponentState {
  toggleButton(value: boolean): void
}
