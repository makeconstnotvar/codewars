function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)
let n6 = new ListNode(6)
let n7 = new ListNode(7)
let n8 = new ListNode(8)
let n9 = new ListNode(9)

let lists = [n1, n2, n3, n4, n5, n6, n7, n8, n9];

let res = mergeKLists(lists)
console.log(res);
function mergeKLists(lists) {
  while (lists.length > 1) {
    let i = 0;
    while (i < lists.length) {
      let l1 = lists[i];
      let l2 = i < lists.length-1 ? lists.pop() : [];
      lists[i] = merge(l1, l2);
      i++;
    }
  }
  return lists[0];
}

function merge(l1, l2) {
  let temp = new ListNode();
  let current = temp;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return temp.next;
}
