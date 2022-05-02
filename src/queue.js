const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  //build a queue:
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // returns underlying linked list (you can just use head here and the inputs afterwards will be added automatically)
  getUnderlyingList() {
    return this.head;
  }

  // add the element 
  enqueue(value) {
    const nextNode = {value, next: null};
    if (!this.head) {
      this.head = nextNode;
      this.tail = nextNode;
    } else {
      this.tail.next = nextNode;
      this.tail = this.tail.next;
    }
  }

  //retrieves a value from the head of the queue and deletes it 
  dequeue() {
    const deletedValue = this.head.value;
    this.head = this.head.next;
    return deletedValue;
  }
}

module.exports = {
  Queue
};
