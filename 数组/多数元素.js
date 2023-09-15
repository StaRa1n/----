// https://leetcode.cn/problems/majority-element/

// 第一个数计数1, 遇到相同加一, 不同减一,为0时更换数字(题目总有多数元素)
var majorityElement = function (nums) {
  //投票算法
  let count = 1,
    num = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === num) {
      count++
    } else {
      count--
      if (count === 0) {
        num = nums[i]
        count = 1
      }
    }
  }
  return num
}
