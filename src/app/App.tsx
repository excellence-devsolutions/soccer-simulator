import React, { Suspense } from 'react'
import { SplashPage } from '../pages/SplashPage'
import { HomePage } from './helpers/lazy-components'

const App: React.FC = () => {
  return (
    <Suspense fallback={<SplashPage />}>
      <HomePage />
    </Suspense>
  )
}

export default App
