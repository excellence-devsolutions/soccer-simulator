import React from 'react'
import { SSAppBar } from '../SSAppBar'
import { SSDrawer } from '../SSDrawer'
import Provider from '../../provider/Provider'

const SSNavigationComponent: React.FC = () => {
  return (
    <Provider>
      <SSAppBar />
      <SSDrawer />
    </Provider>
  )
}

export default SSNavigationComponent
