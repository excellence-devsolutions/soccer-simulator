import React from 'react'

interface SSAppBarTitleComponentProps {
  title: string
}

const SSAppBarTitleComponent: React.FC<SSAppBarTitleComponentProps> = (
  props: SSAppBarTitleComponentProps
) => {
  const { title } = props
  return <h1>{title}</h1>
}

export default SSAppBarTitleComponent
