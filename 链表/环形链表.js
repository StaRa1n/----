const hasCycle = function () {
  if (!head) return false 
  let slow = head, fast = head

  while (fast) {
    slow = slow.next

    // 判断链表是否结束
    if (fast.next) {
      fast = fast.next.next
    }else {
      return false
    }

    // 成环
    if (fast === slow) {
      return true
    }
  }
  return false
}