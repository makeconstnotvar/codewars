function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
  let cache = 0;
  let rest = 0;
  let result = new ListNode();
  let head = result;
  let tail = null;
  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + cache;
    if (sum >= 10) {
      rest = sum % 10
      cache = 1;
    } else {
      rest = sum;
      cache = 0;
    }
    l1 = l1.next;
    l2 = l2.next;
    result.next = new ListNode(rest)
    result = result.next;
  }
  if (l1) {
    tail = l1
  }
  if (l2) {
    tail = l2
  }

  while (tail != null) {
      let sum = tail.val + cache;
      if (sum >= 10) {
        rest = sum % 10
        cache = 1;
      } else {
        rest = sum;
        cache = 0;
      }
      tail = tail.next;
      result.next = new ListNode(rest)
      result = result.next;
    }

  if(cache == 1){
    result.next = new ListNode(cache)
  }
  return head.next
}

let list1 = new ListNode(1, new ListNode(8))
let list2 = new ListNode(0);

let test = addTwoNumbers(list1, list2)
console.log(1)