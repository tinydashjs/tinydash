import * as $ from './index.mjs'
import _ from 'lodash'

test('last', () => {
  const args = [[1, 2, 3]]
  expect($.last(...args)).toBe(_.last(...args))
})
