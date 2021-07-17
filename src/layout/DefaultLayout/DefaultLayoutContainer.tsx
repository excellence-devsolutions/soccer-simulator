import React from 'react'

const DefaultLayoutContainer: React.FC = (props) => {
  const { children, ...rest } = props
  return (
    <React.Fragment>
      <div {...rest}>{children}</div>
    </React.Fragment>
  )
}

export default DefaultLayoutContainer
