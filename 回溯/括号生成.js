// https://leetcode.cn/problems/generate-parentheses/
var generateParenthesis = function (n) {
  const res = []
  // 递归出所有情况(满二叉树)
  function dfs(path, left, right) {
    // path: 路径, right,left: 括号个数

    if (left > n || right > left) return //左右括号一定小于n,并且path中出现右括号数量大于左括号时,括号组合一定非法,如 ()), (()))
    if (path.length === n * 2) {
      res.push(path)
      return
    }

    dfs(path + '(', left + 1, right)
    dfs(path + ')', left, right + 1)
  }
  dfs('', 0, 0)
  return res
}