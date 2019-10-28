var arr = [1, [2, [3, 4]]]

function flatten(arr) {
  var result = []
  for (var i = 0, len = arr.length; i < len; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

function flatten1(arr) {
  return arr.reduce(
    (accu, curr) => {
      return accu.concat(Array.isArray(curr) ? flatten1(curr): curr)
    }, 
    []
  )
}

function flatten2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
