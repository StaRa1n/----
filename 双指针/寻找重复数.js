// https://leetcode.cn/problems/find-the-duplicate-number/description/
var findDuplicate = function (nums) {
  // 快慢指针
  // 将数组抽象为链表,判断是否有环,根据值跳到指定下标
  // [1,2,3,4,5,6,7,5] => [1,2,3,4,5][6,7,5][6,7,5]
  // 未排序

  // 第一次寻找找到快慢指针相遇点
  let fast = 0,
    slow = 0
  while (true) {
    // 每次更新两次值
    fast = nums[nums[fast]]
    slow = nums[slow]
    if (fast === slow) break
  }
  // 第二次都使用慢指针即找到入口处
  let finder = 0
  while (true) {
    // 每次更新两次值
    finder = nums[finder]
    slow = nums[slow]
    if (finder === slow) break
  }
  return slow
}
