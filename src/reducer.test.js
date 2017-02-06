import test from 'ava'
import expect from 'expect'

import reducer from './reducer'
import deepFreeze from 'deep-freeze'

test('set active page', () => {
  const stateBefore = {}
  const stateAfter = {
    page: 2
  }

  deepFreeze(stateBefore)

  expect(
    reducer(stateBefore, {
      type: 'SET_ACTIVE_PAGE',
      page: 2
    })
  ).toEqual(stateAfter)
})
