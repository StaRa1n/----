//https://leetcode.cn/problems/maximum-subarray/

var maxSubArray = function (nums) {
  // dp[i]表示以num[i]为结尾的数组的最大子序列
  const dp = Array(nums.length)
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
  }

  return Math.max(...dp)
}
