import React, { Fragment } from 'react'
import { SSAppBar } from '../SSAppBar'
import { SSDrawer } from '../SSDrawer'

const SSNavigationComponent: React.FC = () => {
  return (
    <Fragment>
      <SSAppBar />
      <SSDrawer />
    </Fragment>
  )
}

export default SSNavigationComponent
