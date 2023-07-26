function canJump(nums) {
  const dp = Array()
  // dp[n]表示该下标所能到达的最远位置
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // 当无法到达数组的位置时返回false
    if (Math.max(...dp) < i) return false
    if (nums[i] === 0) {
      dp[i] = i
    } else {
      dp[i] = i + nums[i]
    }
    // 当到达数组的最远位置时返回true
    if (dp[i] > nums.length) return true
  }
}

// 非动规代码,动规思想
function canJump2(nums) {
  // 可到达的最远距离
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    // 无法到达某位置
    if (i > max) return false
    max = Math.max(max, i + nums[i])
  }
  return true
}
