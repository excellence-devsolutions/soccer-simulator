import { createContext } from 'react'

import { initialProps } from '../../components/SSNavigation/store/initial-props'
import { reducer } from '../../components/SSNavigation/store/reducer'

import { getNavigationSettings } from '../../components/SSNavigation/store/settings'

const SoccerSimulatorContext = createContext(initialProps)

export { getNavigationSettings, initialProps, reducer, SoccerSimulatorContext }
