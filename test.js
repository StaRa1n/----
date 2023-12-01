var longestValidParentheses = function (s) {
  let arr = s.split('')
  let stack = []
  let result = 0
  let curMax = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      if (stack.length === 0) {
        result = Math.max(result, curMax)
        curMax = 0
      }
      stack.push('(')
    } else {
      if (stack.length) {
        stack.pop()
        curMax += 2
      } else {
        result = Math.max(result, curMax)
        curMax = 0
        continue
      }
    }
    result = Math.max(result, curMax)
  }
  return result
}

console.log(longestValidParentheses('(()((())'))
