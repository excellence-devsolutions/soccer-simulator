import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import { SoccerSimulatorContext } from '../../../../provider/Provider'

const SSAppBarTitleComponent: React.FC = () => {
  const { appBar } = useContext(SoccerSimulatorContext)
  const { title } = appBar
  const { text } = title
  return (
    <Typography variant="h6" data-testid="ss-app-bar-title">
      {text}
    </Typography>
  )
}

export default SSAppBarTitleComponent
