import { initialProps as initialPropsForMenuButton } from '../children/SSAppBarMenuButton/store/initial-props'
import SSAppBarMenuButtonComponentProps from '../children/SSAppBarMenuButton/store/interfaces/SSAppBarMenuButtonComponentProps'
import { initialProps as initialPropsForTitle } from '../children/SSAppBarTitle/store/initial-props'
import SSAppBarTitleComponentProps from '../children/SSAppBarTitle/store/interfaces/SSAppBarTitleComponentProps'
import { initialState } from './initial-state'
import SSAppBarComponentProps from './interfaces/SSAppBarComponentProps'

const initialProps: SSAppBarComponentProps = {
  menuButton: {
    ...initialPropsForMenuButton,
    ...(initialState.menuButton as SSAppBarMenuButtonComponentProps),
  },
  title: {
    ...initialPropsForTitle,
    ...(initialState.title as SSAppBarTitleComponentProps),
  },
}

export { initialProps }
