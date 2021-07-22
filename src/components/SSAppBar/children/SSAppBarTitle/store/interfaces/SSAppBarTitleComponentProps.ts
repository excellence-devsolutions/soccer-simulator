import SSAppBarTitleComponentState from './SSAppBarTitleComponentState'

export default interface SSAppBarTitleComponentProps
  extends SSAppBarTitleComponentState {
  resetText(): void
  setText(value: string): void
}
