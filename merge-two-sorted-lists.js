function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function mergeTwoLists(list1, list2) {
  let result;

  while (list1 || list2) {
    let newItem;
    if (list1 && list1.val && list2 && list2.val) {
      if (list1.val <= list2.val) {
        newItem = new ListNode(list1.val);
        list1 = list1.next;
      } else {
        newItem = new ListNode(list2.val);
        list2 = list2.next;
      }
    } else if (!result) {
      result = newItem;
    } else {
      let current = result;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newItem;
    }
  }

  return result;
}

function mergeTwoLists(list1, list2) {
  let sll = new ListNode();
  let result = sll;

  while (list1 != null && list2 != null) {
    if (list1.val <= list2.val) {
      sll.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      sll.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    sll = sll.next;
  }

  if (list1) {
    sll.next = list1;
  }

  if (list2) {
    sll.next = list2;
  }

  return result.next;
}

//let a = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5, new ListNode(6)))))
//let b = new ListNode(1, new ListNode(3, new ListNode(4)))
let a = new ListNode()
let b = new ListNode()
console.log(mergeTwoLists(a, b))