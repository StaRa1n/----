// https://leetcode.cn/problems/maximal-square/description/
var maximalSquare = function (matrix) {
  const h = matrix.length
  let max = 0
  const w = matrix[0].length
  // dp[i][j]表示以该节点为右下角矩阵的边长
  const dp = Array(h)
    .fill()
    .map(() => Array(w))

  for (let i = 0; i < h; i++) {
    dp[i][0] = matrix[i][0] === '1' ? 1 : 0
  }

  for (let i = 0; i < w; i++) {
    dp[0][i] = matrix[0][i] === '1' ? 1 : 0
  }

  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      } else {
        dp[i][j] = 0
      }
    }
  }

  for (let i = 0; i < h; i++) {
    max = Math.max(...dp[i]) > max ? Math.max(...dp[i]) : max
  }

  return max * max
}

let matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]
console.log(maximalSquare(matrix))
