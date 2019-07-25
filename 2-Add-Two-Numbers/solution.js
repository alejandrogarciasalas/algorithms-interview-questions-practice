function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(l1, l2) {
  const dummyHead = new ListNode(0);
  let curr = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    let op1 = (l1 != null) ? l1.val : 0;
    let op2 = (l2 != null) ? l2.val : 0;
    let sum = op1 + op2 + carry;
    // if (sum >= 10) {
    //   carry = 1;
    //   sum = sum % 10;
    // }
    // or to avoid the check:
    carry = Math.floor(sum / 10); // floor division
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }

  // left over carry
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummyHead.next;
}
