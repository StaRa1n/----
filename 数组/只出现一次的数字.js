// 位运算
// leetcode163 https://leetcode.cn/problems/single-number/
var singleNumber = function (nums) {
  // 位运算之异或
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i]
  }
  return res
}
