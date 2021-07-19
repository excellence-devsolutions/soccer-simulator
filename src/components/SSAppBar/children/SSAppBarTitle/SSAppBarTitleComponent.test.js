import React from 'react'
import { render, screen } from '@testing-library/react'
import SSAppBarTitleComponent from './SSAppBarTitleComponent'
import '@testing-library/jest-dom'

describe('SSAppBarTitleComponent', () => {
  it('should have the text "Soccer Simulator"', () => {
    const title = 'Soccer Simulator'
    render(<SSAppBarTitleComponent title={title} />)
    const titleElement = screen.getByTestId('ss-app-bar-title')
    expect(titleElement).toHaveTextContent(title)
  })
})
