exports.generateId = (len = 5) => {
  const charArr = []
  let id = ''
  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    .split('')
    .forEach((val, _i) => {
      charArr.push(val)
    })
  for (let i = 0; i < len; i++) {
    id += charArr[roll(0, charArr.length)]
  }
  return id
}

// Helpers

const roll = (min, max, floatFlag = false) => {
  const r = Math.random() * (max - min) + min
  return floatFlag ? r : Math.floor(r)
}
