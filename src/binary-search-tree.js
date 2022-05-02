const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data) {
    this.tree = null;
    this.right = null;
    this.left = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const nextNode = {
      data, right: null, left: null, parent: null,
    };
    let now = this.tree;
// It is an infinite loop which will run till a break statement is issued explicitly.
//  Interestingly not while(1) but any integer which is non-zero will give a similar effect as while(1). Therefore, while(1), while(2) or while(-255), all will give infinite loop only.      
    while (7) {
      if (!now) {
        this.tree = nextNode;
        return 0;
      }
      if (data === now.data) return 0;
      if (data > now.data) {
        if (now.right) {
          now = now.right;
        } else {
          now.right = nextNode;
          nextNode.parent = now;
          return;
        }
      }
      if (data < now.data) {
        if (now.left) {
          now = now.left;
        } else {
          now.left = nextNode;
          nextNode.parent = now;
          return;
        }
      }
    }
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    let current = this.tree;

    while (1) {
      if (data === current.data) {
        return current;
      }
      if (data > current.data) {
        if (current.right) {
          current = current.right;
        } else {
          return null;
        }
      }
      if (data < current.data) {
        if (current.left) {
          current = current.left;
        } else {
          return null;
        }
      }
    }
  }

  remove(data) {
    const now = this.find(data);

    if (now) {
      if (!now.left && !now.right) {
        if (now.data > now.parent.data) {
          now.parent.right = null;
        } else {
          now.parent.left = null;
        }
        return;
      }

      if (!now.left) {
        if (now.data > now.parent.data) {
          now.parent.right = now.right;
          now.right.parent = now.parent;
        } else {
          now.parent.left = now.right;
          now.right.parent = now.parent;
        }
        return;
      }

      if (!now.right) {
        if (now.data > now.parent.data) {
          now.parent.right = now.left;
          now.left.parent = now.parent;
        } else {
          now.parent.left = now.left;
          now.left.parent = now.parent;
        }
        return;
      }

      if (now.right && now.left) {
        let max = now.left;

        while (1) {
          if (max.right) {
            max = max.right;
          } else {
            break;
          }
        }

        now.data = max.data;

        if (max.data > max.parent.data) {
          max.parent.right = null;
        } else {
          max.parent.left = null;
        }
      }
    }
  }

  min() {
    let current = this.tree;

    if (!current) return null;

    while (1) {
      if (current.left) {
        current = current.left;
      } else {
        return current.data;
      }
    }
  }

  max() {
    let current = this.tree;

    if (!current) return null;

    while (1) {
      if (current.right) {
        current = current.right;
      } else {
        return current.data;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
