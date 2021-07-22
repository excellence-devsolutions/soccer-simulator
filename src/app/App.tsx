import { CssBaseline } from '@material-ui/core'
import React, { Suspense } from 'react'
import { DefaultLayout } from '../layout/DefaultLayout'
import { SplashPage } from '../pages/SplashPage'
import Provider from '../provider/Provider'
import { HomePage } from './helpers/lazy-components'

const App: React.FC = () => {
  return (
    <Provider>
      <CssBaseline />
      <DefaultLayout>
        <Suspense fallback={<SplashPage />}>
          <HomePage />
        </Suspense>
      </DefaultLayout>
    </Provider>
  )
}

export default App
