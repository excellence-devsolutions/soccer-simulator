import { createContext } from 'react'

import { initialProps } from '../../app/store/initial-props'
import { reducer } from '../../app/store/reducer'

import { getAppSettings as getSettings } from '../../app/store/settings'

const SoccerSimulatorContext = createContext(initialProps)

export { getSettings, initialProps, reducer, SoccerSimulatorContext }
