// https://leetcode.cn/problems/wiggle-subsequence/
var wiggleMaxLength = function (nums) {
  // 贪心
  if (nums.length <= 1) return nums.length

  let count = 1 // 有几个峰值
  let pre = 0,
    cur = 0

  for (let i = 0; i < nums.length - 1; i++) {
    cur = nums[i + 1] - nums[i]
    if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
      count++
      pre = cur
    }
  }
  return count // count为峰值，返回加上首尾两树
}

// 动态规划