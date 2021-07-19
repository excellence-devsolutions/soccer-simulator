import React from 'react'
import useStyles from '../../app/styles/styles'

const MobileLayoutContainer: React.FC = (props) => {
  const classes = useStyles()
  const { children, ...rest } = props
  return (
    <React.Fragment>
      <div className={classes.root} {...rest}>
        {children}
      </div>
    </React.Fragment>
  )
}

export default MobileLayoutContainer
