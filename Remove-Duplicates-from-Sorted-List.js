function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

//let list = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))))
let list = new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1))))

function deleteDuplicates(head) {
  let current = head;
  while (current != null) {
    if (current.next != null && current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return head
}

deleteDuplicates(list);