// https://leetcode.cn/problems/jump-game-ii/description/
var jump = function (nums) {
  const dp = Array(nums.length).fill(Infinity)
  // dp[i]表示跳到i的最小跳跃数
  dp[0] = 0

  // 已知当前nums[i]的值,则可知dp[i] ~ dp[i+nums[i]]的值则为dp[i] + 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      dp[i + j] = Math.min(dp[i] + 1, dp[i + j])
    }
  }
  return dp[nums.length - 1]
}
console.log(jump([2, 3, 0, 1, 4]))
