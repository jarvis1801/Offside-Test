import { getEtaMinuteByDate } from './DateUtil'

test('invalid input, result -', () => {
  expect(getEtaMinuteByDate("12313123")).toBe('-')
})

test('diff 0, result 0', () => {
  expect(getEtaMinuteByDate(new Date().toISOString())).toBe(0)
})

test('diff 1 min, result 1', () => {
  const input = new Date()
  input.setMinutes(input.getMinutes() + 1)
  expect(getEtaMinuteByDate(input.toISOString())).toBe(1)
})