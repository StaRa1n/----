// https://leetcode.cn/problems/path-sum-iii/
// 将每个节点都作为根节点遍历计算一次
var pathSum = function (root, targetSum) {
  if (root == null) {
    return 0
  }

  let ret = rootSum(root, targetSum)
  ret += pathSum(root.left, targetSum)
  ret += pathSum(root.right, targetSum)
  return ret
}

const rootSum = (root, targetSum) => {
  let ret = 0

  if (root == null) {
    return 0
  }
  const val = root.val
  if (val === targetSum) {
    ret++
  }

  ret += rootSum(root.left, targetSum - val)
  ret += rootSum(root.right, targetSum - val)
  return ret
}
