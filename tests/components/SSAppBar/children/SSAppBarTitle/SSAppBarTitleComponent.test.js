import { describe, expect, it } from '@jest/globals'
import { shallow } from 'enzyme'
import SSAppBarTitleComponent from '../../../../../src/components/SSAppBar/children/SSAppBarTitle/SSAppBarTitleComponent'

const testAppBarTitle = (title) => {
  const wrapper = shallow(<SSAppBarTitleComponent title={title} />)
  const titleElement = wrapper.find('h1')
  expect(titleElement.text()).toBe(title)
}

describe('SSAppBarTitleComponent', () => {
  it('should have the text "Soccer Simulator"', () =>
    testAppBarTitle('Soccer Simulator'))
})

export { testAppBarTitle }
