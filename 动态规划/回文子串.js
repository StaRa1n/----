// https://leetcode.cn/problems/palindromic-substrings/
// 暴力判断所有子字符串
var countSubstrings = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.substring(i, j + 1))) {
        count++
      }
    }
  }
  return count
}

// 是否回文
const isPalindrome = (arr) => {
  const reversArr = arr.split('').reverse().join('')
  return arr === reversArr
}

// 动规
const countSubstrings2 = (s) => {
  const dp = Array(s.length)
    .fill()
    .map(() => Array(s.length).fill(false))
  let result = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i - j === 0) {
        // 一个字符时
        dp[i][j] = true
        result++
      } else if (i - j === 1 && s[i] === s[j]) {
        // 两个字符时相等为回文
        dp[i][j] = true
        result++
      } else if (i - j > 1 && s[i] === s[j] && dp[i - 1][j + 1]) {
        // 多个字符时首尾相等, 并且除去首尾的子字符串也为回文
        dp[i][j] = true
        result++
      }
    }
  }
  return result
}
console.log(countSubstrings2('ardra'))
