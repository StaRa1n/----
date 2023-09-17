// https://leetcode.cn/problems/sort-colors/description/

var sortColors = function (nums) {
  let left = 0,
    right = nums.length - 1
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 0) {
      ;[nums[i], nums[left]] = [nums[left], nums[i]]
      left++
    }
    if (nums[i] === 2 && i <= right) {
      ;[nums[i], nums[right]] = [nums[right], nums[i]]
      right--
    }
  }
}
const arr = [2, 0, 1, 1, 1, 1, 2, 2]
sortColors(arr)
console.log(arr)
