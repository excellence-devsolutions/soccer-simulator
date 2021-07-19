import SSAppBarTitleComponentState from './SSAppBarTitleComponentState'

export default interface SSAppBarTitleComponentProps
  extends SSAppBarTitleComponentState {
  setText(value: string): void
}
