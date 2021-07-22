import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React, { Fragment, useContext, useReducer } from 'react'
import { SoccerSimulatorContext } from '../../../../provider/Provider'
import {
  getSettings,
  initialProps,
  reducer,
} from '../../../../provider/settings'
import SSAppBarTitleComponent from './SSAppBarTitleComponent'

const MockedProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialProps)
  const value = getSettings(state, dispatch)
  return (
    <SoccerSimulatorContext.Provider value={value}>
      {children}
    </SoccerSimulatorContext.Provider>
  )
}

const MockedComponent = (props) => {
  const { text } = props
  const context = useContext(SoccerSimulatorContext)
  const { resetText, setText } = context.navigation.appBar.title
  return (
    <Fragment>
      <SSAppBarTitleComponent />
      <button
        data-testid="jest-button-1"
        onClick={() => setText(text)}
      ></button>
      <button data-testid="jest-button-2" onClick={() => resetText()}></button>
    </Fragment>
  )
}

const TestComponent = (props) => {
  const { text } = props
  return (
    <MockedProvider>
      <MockedComponent text={text} />
    </MockedProvider>
  )
}

describe('SSAppBarTitleComponent', () => {
  it('should be "Soccer Simulator"', () => {
    render(<SSAppBarTitleComponent />)
    const titleElement = screen.getByTestId('ss-app-bar-title')
    expect(titleElement).toHaveTextContent(
      initialProps.navigation.appBar.title.text
    )
  })

  it('should change to "Brasileirão Série A"', () => {
    const text = 'Brasileirão Série A'
    render(<TestComponent text={text} />)
    const buttonElement = screen.getByTestId('jest-button-1')
    const titleElement = screen.getByTestId('ss-app-bar-title')
    fireEvent.click(buttonElement)
    expect(titleElement).toHaveTextContent(text)
  })

  it('should change to "Brasileirão Série A" and then reset to default', () => {
    const text = 'Brasileirão Série A'
    render(<TestComponent text={text} />)
    const titleElement = screen.getByTestId('ss-app-bar-title')
    const buttonElement1 = screen.getByTestId('jest-button-1')
    const buttonElement2 = screen.getByTestId('jest-button-2')
    fireEvent.click(buttonElement1)
    expect(titleElement).toHaveTextContent(text)
    fireEvent.click(buttonElement2)
    expect(titleElement).toHaveTextContent(
      initialProps.navigation.appBar.title.text
    )
  })
})
