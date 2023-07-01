// 解题：1.寻找第一个 >=target的数(判断该数是否==target)
//      2.寻找的一个 >=target + 1 的数
//      3.结果为[left, right - 1]
var searchRange = function (nums, target) {
  let left = searchLeft(nums, target)
  let right = searchLeft(nums, target + 1)
  if (left === nums.length || nums[left] !== target) {
    return [-1, -1]
  }
  return [left, right - 1]
}

// 寻找第一个>=target的数,(难点,细节多)
var searchLeft = function (nums, target) {
  let left = 0,
    // 不设置(length - 1)考虑length = 1时
    right = nums.length
    // 不设置=()
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (target <= nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}

console.log(searchLeft([5, 5, 5, 5, 8, 8, 9, 10], 8))
