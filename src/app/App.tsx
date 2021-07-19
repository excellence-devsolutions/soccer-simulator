import { CssBaseline } from '@material-ui/core'
import React, { Fragment, Suspense } from 'react'
import { SplashPage } from '../pages/SplashPage'
import { HomePage } from './helpers/lazy-components'

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <Suspense fallback={<SplashPage />}>
        <HomePage />
      </Suspense>
    </Fragment>
  )
}

export default App
