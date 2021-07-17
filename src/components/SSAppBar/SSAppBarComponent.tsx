import React from 'react'
import { SSAppBarMenuButton } from './children/SSAppBarMenuButton'
import { SSAppBarTitle } from './children/SSAppBarTitle'

const SSAppBarComponent: React.FC = () => {
  return (
    <React.Fragment>
      <SSAppBarMenuButton />
      <SSAppBarTitle />
    </React.Fragment>
  )
}

export default SSAppBarComponent
