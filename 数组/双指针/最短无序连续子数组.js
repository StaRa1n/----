// https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/description/
var findUnsortedSubarray = function (nums) {
  let min = nums[nums.length - 1],
    max = nums[0]
  let start = 0,
    end = -1

  for (let i = 0; i < nums.length; i++) {
    // 寻找右边界
    // 如果有序,每次遍历都会与前一个数(max)比较,
    // 如果无序,则更新
    if (nums[i] < max) {
      end = i
    } else {
      max = nums[i]
    }

    // 左边界
    if (nums[nums.length - i - 1] > min) {
      start = nums.length - i - 1
    } else {
      min = nums[nums.length - i - 1]
    }
  }

  return end - start + 1
}
