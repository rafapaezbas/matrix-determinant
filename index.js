const cofactor = (array, column) => {
  const subArray = array.filter((e, i) => i !== 0).map(e => e.filter((o, j) => j !== column))
  return Math.pow(-1, column) * determinant(subArray)
}

const determinant = (array) => {
  if (array.length === 1) return array[0][0]

  let result = 0
  for (let i = 0; i < array.length; i++) {
    result += array[0][i] * cofactor(array, i)
  }
  return result
}

module.exports = {
  determinant
}
