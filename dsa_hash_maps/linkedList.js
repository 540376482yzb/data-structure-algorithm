class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next)
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }
  //insert first
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }
  insertLast(item) {
    if (this.head === null) {
      return this.insertFirst(item)
    }
    let tempNode = this.head
    while (tempNode.next !== null) {
      tempNode = tempNode.next
    }
    tempNode.next = new _Node(item, null)
  }
  insertBefore(item, key) {
    //empty ll
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    // key is in head position
    if (this.head.value === key) {
      this.insertFirst(item)
    }
    // find the node whose value is key
    // find the node's previous node
    let currNode = this.head
    let preNode = this.head
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null
      }
      preNode = currNode
      currNode = currNode.next
    }
    preNode.next = new _Node(item, currNode)
  }

  insertAfter(item, key) {
    //empty ll
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    let currNode = this.head
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null
      }
      currNode = currNode.next
    }
    //save the existing nodes after target node
    let nextNode = currNode.next
    //bridge currNode with new Node and with rest of nodes
    currNode.next = new _Node(item, nextNode)
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    let position = 0
    let currNode = this.head
    while (position !== pos) {
      if (currNode.next === null) {
        return null
      }
      position++
      currNode = currNode.next
    }
    this.insertAfter(item, currNode.value)
  }

  find(item) {
    let currNode = this.head
    if (!this.head) {
      return null
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null
      }
      currNode = currNode.next
    }
    return currNode
  }

  remove(item) {
    //if ll is empty
    if (!this.head) {
      return null
    }
    //if item is the head
    if (this.head.value === item) {
      this.head = this.head.next
      return
    }

    let currNode = this.head
    let preNode = this.head

    while (currNode !== null && currNode.value !== item) {
      preNode = currNode
      currNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    preNode.next = currNode.next
  }
}

module.exports = LinkedList
