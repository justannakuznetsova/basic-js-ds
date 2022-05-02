const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 * 
 * The Linked List could have data spread in 4 ways;
      There are more than two nodes(items) in the list.
      There are only two nodes(items) in the list.
      There is only one node(item) in the list.
      There are no nodes(items) in the list.
 */
function removeKFromList(l, k) {
  return removeK(l, k);

  function removeK(nodes, k) {
    if (!nodes.next) {
      return nodes;
    }

    if (nodes.value === k) {
      nodes = removeK(nodes.next, k);
    }

    if (nodes.next.value !== k) {
      nodes.next = removeK(nodes.next, k);
    }

    else {
      let arrayWithoutK = nodes.next;
      while (arrayWithoutK && arrayWithoutK.value === k) {
        arrayWithoutK = arrayWithoutK.next;
      }
      if (!arrayWithoutK || arrayWithoutK.value === k) {
        nodes.next = null;
      } else nodes.next = removeK(arrayWithoutK, k);
    }
    return nodes;
  }
}

module.exports = {
  removeKFromList
};
