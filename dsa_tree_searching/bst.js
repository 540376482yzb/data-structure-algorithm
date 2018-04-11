class BST {
  constructor(key = null, parent = null) {
    this.key = key
    this.left = null
    this.right = null
    this.parent = parent
  }

  insert(key) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key === null) {
      return (this.key = key)
    }
    //if key is less than key compared to , go to left. and called resurvie func on target node
    if (key < this.key) {
      if (this.left === null) {
        return (this.left = new BST(key, this))
      }
      return this.left.insert(key)
    } else {
      //if key is greater than key compared to , go to right. and called resurvie func on target node
      if (this.right === null) {
        return (this.right = new BST(key, this))
      }
      return this.right.insert(key)
    }
  }

  find(key) {
    //if the item is found at the root then return that value
    if (this.key === key) {
      return this.key
    } else if (key < this.key && this.left) {
      //if the item you are looking for is less than the root
      //then follow the left child
      //if there is an existing left child,
      //then recursively check its left and/or right child
      //until you find the item.
      return this.left.find(key)
    } else if (key > this.key && this.right) {
      return this.right.find(key)
    } else {
      //You have search the treen and the item is not in the tree
      return null
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const successor = this.right._findMin()
        this.key = successor.key
        successor.remove(successor.key)
      } else if (this.left) {
        //If the node only has a left child,
        //then you replace the node with its left child.
        this._replaceWith(this.left)
      } else if (this.right) {
        //And similarly if the node only has a right child
        //then you replace it with its right child.
        this._replaceWith(this.right)
      } else {
        //If the node has no children then
        //simply remove it and any references to it
        //by calling "this._replaceWith(null)".
        this._replaceWith(null)
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key)
    } else if (key > this.key && this.right) {
      this.right.remove(key)
    } else {
      throw new Error('Key Error')
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node
      } else if (this === this.parent.right) {
        this.parent.right = node
      }

      if (node) {
        node.parent = this.parent
      }
    } else {
      if (node) {
        this.key = node.key
        this.left = node.left
        this.right = node.right
      } else {
        this.key = null
        this.left = null
        this.right = null
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this
    }
    return this.left._findMin()
  }
}

module.exports = BST
