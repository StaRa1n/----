// 将(排序)数组对半分,比较目标值与中间值的大小
// 时间复杂度logn
var search = function (nums, target) {
  let leftIndex = 0,
    rightIndex = nums.length - 1

  while (leftIndex <= rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2)
    if (target < nums[mid]) {
      rightIndex = mid - 1
    } else if (target > nums[mid]) {
      leftIndex = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

let arr = [-1, 0, 3, 5, 9, 12]
console.log(search(arr, 5))
