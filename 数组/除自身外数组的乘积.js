// https://leetcode.cn/problems/product-of-array-except-self/description/
var productExceptSelf = function (nums) {
  // 将数组拆分为前后缀数组
  // 简化空间复杂度为O(1)
  const answer = [1]
  let R = 1
  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }
  console.log(answer)
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= R
    R *= nums[i]
  }

  return answer
}
