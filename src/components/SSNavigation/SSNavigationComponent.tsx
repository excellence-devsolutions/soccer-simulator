import React from 'react'
import { SSAppBar } from '../SSAppBar'
import { SSDrawer } from '../SSDrawer'

const SSNavigationComponent: React.FC = () => {
  return (
    <React.Fragment>
      <SSAppBar />
      <SSDrawer />
    </React.Fragment>
  )
}

export default SSNavigationComponent
