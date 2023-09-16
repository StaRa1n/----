//leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
// 两次二分查找寻找左右边界
https: var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  let start = -1,
    end = -1

  const findStart = () => {
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)

      if (nums[middle] === target) {
        start = middle
        right = middle - 1
      } else if (nums[middle] < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }

  const findEnd = () => {
    while (left <= right) {
      let middle = Math.floor((left + right) / 2)
      if (nums[middle] === target) {
        end = middle
        left = middle + 1
      } else if (nums[middle] < target) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }

  findStart()

  // right值更新至最右
  right = nums.length - 1
  findEnd()

  return [start, end]
}
