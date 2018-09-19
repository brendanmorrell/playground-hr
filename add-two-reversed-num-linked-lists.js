var addTwoNumbers = function(l1, l2) {
  if (!l1 && !l2) return new ListNode();
  if (!l1 || !l2) return !l1 ? l2 : l1;
  let [arr1, arr2] = (function createReversedArrayFromTwoLLs(list1, list2, arr1 = [], arr2 = []) {
    if ((!list1 && !list2) || (!list1.val && !list2.val)) return [arr1, arr2];
    if (list1.val) {
      arr1.unshift(String(list1.val));
      list1 = list1.next;
    }
    if (list2.val) {
      arr2.unshift(String(list2.val));
      list2 = list2.next;
    }
    return createReversedArrayFromTwoLLs(list1, list2, arr1, arr2);
  })(l1, l2);
  let total = (+arr1.join('') + +arr2.join('')).toString().split('');

  return (function createNewLL(currentNode, LL) {
    if (!total.length) return LL;
    else if (!LL) {
      LL = new ListNode(+total.pop());
      currentNode = LL;
    }
    currentNode.next = new ListNode(+total.pop());
    return createNewLL(currentNode.next, LL);
  })();
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(0);
l1.next = new ListNode(0);
l1.next.next = new ListNode(3);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

// console.log(addTwoNumbers(l1, l2));
console.log('result', addTwoNumbers(1, 2));
