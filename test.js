const test = require('brittle')
const { determinant } = require('./index.js')

test('orden 1', t => {
  const result = determinant([[0]])
  t.is(result, 0)
})

test('orden 1', t => {
  const result = determinant([[999]])
  t.is(result, 999)
})

test('orden 2', t => {
  const result = determinant([[0, 0], [0, 0]])
  t.is(result, 0)
})

test('orden 2', t => {
  const result = determinant([[1, 2], [3, 4]])
  t.is(result, -2)
})

test('orden 3', t => {
  const result = determinant([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
  t.is(result, 0)
})

test('orden 3', t => {
  const result = determinant([[2, 3, 1], [0, -2, 5], [3, 7, -4]])
  t.is(result, -3)
})

test('orden 4', t => {
  const result = determinant([[1, 4, 2, 1], [0, 3, 5, 3], [0, 5, 7, -4], [0, -7, -7, 0]])
  t.is(result, 98)
})
