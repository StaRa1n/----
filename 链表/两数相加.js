// https://leetcode.cn/problems/add-two-numbers/
var addTwoNumbers = function (l1, l2) {
  const res = new ListNode(0)
  let head = res

  let carry = 0 //进位值

  while (l1 || l2 || carry) {
    // 确保最后一位超出十时继续循环
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry // 当前节点的值为两个链表节点的值加上进位值

    carry = Math.floor(sum / 10) //每轮重新计算进位值

    head.next = new ListNode(sum % 10) // 直接设置.val可能报错,下一轮循环时的节点未定义
    head = head.next // 未创建.next节点在下一轮时报错(同上理由)

    if (l1) l1 = l1.next //链表长度可能不同
    if (l2) l2 = l2.next
  }
  return res.next
}
