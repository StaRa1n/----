// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/

var flatten = function (root) {
  if (!root) return root

  const queue = [] // 储存前序遍历后的数组
  let resTree = new TreeNode()
  const Tree = resTree

  function dfs(root) {
    // 前序遍历
    queue.push(root.val)
    if (root.left) dfs(root.left)
    if (root.right) dfs(root.right)
  }

  dfs(root)

  while (queue.length) {
    // 构建结果二叉树
    resTree.val = queue.shift()
    if (queue.length !== 0) {
      resTree.right = new TreeNode()
      resTree = resTree.right
    }
  }
  root.right = Tree.right
  root.left = null
}
