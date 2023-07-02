// 双指针之滑动窗口
// 错误 1.结果大于等于长度时(判断结果 result <= nums.length ? result : 0)
//     2.nums[0]符合条件时(从0开始循环)
let minSubArrayLen = function (nums, target) {
  let slow = 0,
    sum = 0,
    length = 0,
    result = Infinity
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    while (sum >= target) {
      length = i - slow + 1
      if (length < result) result = length
      sum -= nums[slow]
      slow++
    }
  }
  return result <= nums.length ? result : 0
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
