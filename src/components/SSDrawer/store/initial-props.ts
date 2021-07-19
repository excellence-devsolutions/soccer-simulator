import { initialProps as initialPropsForMenuButton } from '../../SSDrawer/children/SSDrawerMenuButton/store/initial-props'
import SSDrawerMenuButtonComponentProps from '../../SSDrawer/children/SSDrawerMenuButton/store/interfaces/SSDrawerMenuButtonComponentProps'
import { initialState } from './initial-state'

const initialProps = {
  menuButton: {
    ...initialPropsForMenuButton,
    ...(initialState.menuButton as SSDrawerMenuButtonComponentProps),
  },
}

export { initialProps }
