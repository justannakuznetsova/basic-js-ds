const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

/* Definition. An array is a data structure
consisting of a collection of elements each identified by the array index.
In contrast, a stack is an abstract data type that serves as a collection
of elements with two principal operations: push and pop. Thus, this is the
main difference between Array and Stack.
*/

class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  // returns the last element
  peek() {
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack
};
