const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}

class BinarySearchTree {

  // constructor(){
  //   this.root = null;
  // }

  root() {
    return this.root = null;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode)
    }
  }

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      } 
    } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.addNode(node.right, newNode);
        }
      }
    }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return findNode(this.root, data);

    function findNode(node, data) {
      if (node === null) {
        return null;
      } if (data < node.data) {
        return this.findNode(node.left, data);
      } if (data > node.data) {
        return this.findNode(node.right, data);
      } return node;
    }
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if(node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data > data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        }

        if (node.right === null) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if(!this.root) {
      return null;
    }

    let node = this.root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.root) {
      return null;
    }

    let node = this.root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
