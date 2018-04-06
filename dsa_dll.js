class _Node {
  constructor(value, prev, next) {
    this.value = value
    this.previous = prev
    this.next = next
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insertFirst(item) {
    if (!this.head) {
      return (this.head = new _Node(item, null, null))
    }
    let newHead = new _Node(item, null, this.head)
    this.head.previous = newHead
    this.head = newHead
    this.head.previous = null
    if (!this.tail) {
      this.tail = newHead
    }
  }

  //   insertFirst(item){
  //     let newNode = new _Node(item, this.head, null);
  //     if(this.head !== null ){
  //         this.head.prev = newNode;
  //     }
  //     this.head = newNode;
  //     if(this.tail === null){
  //         this.tail = newNode;
  //     }
  // }

  insertLast(item) {
    if (!this.head) {
      return (this.head = new _Node(item, null, null))
    }
    let currNode = this.head
    while (currNode.next !== null) {
      currNode = currNode.next
    }
    currNode.next = new _Node(item, currNode, null)
  }

  insertBefore(item, key) {
    //empty ll
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    // key is in head position
    if (this.head.value === key) {
      return this.insertFirst(item)
    }
    let currNode = this.head
    let preNode = this.head
    while (currNode.value !== key) {
      if (currNode.next === null) {
        return null
      }
      preNode = currNode
      currNode = currNode.next
    }
    let newNode = new _Node(item, preNode, currNode)
    currNode.previous = newNode
    preNode.next = newNode
  }

  insertAfter(item, key) {
    //empty ll
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    let currNode = this.head
    let nextNode = currNode.next
    let newNode
    // console.log(currNode.value)
    while (currNode.value !== key) {
      if (currNode.next === null) {
        newNode = new _Node(item, currNode, null)
        return (currNode.next = newNode)
      }
      currNode = currNode.next
      nextNode = currNode.next
    }
    newNode = new _Node(item, currNode, nextNode)
    nextNode.previous = newNode
    currNode.next = newNode
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.head = new _Node(item, null)
    }
    if (pos === 0) {
      let newNode = new _Node(item, null, this.head)
      this.head.previous = newNode
      this.head = newNode
      return
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
    this.insertBefore(item, currNode.value)
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
    let preNode = currNode.previous
    let nextNode = currNode.next

    while (currNode !== null && currNode.value !== item) {
      preNode = currNode
      currNode = currNode.next
      nextNode = currNode.next
    }
    if (currNode === null) {
      console.log('Item not found')
      return
    }
    preNode.next = currNode.next
    nextNode.previous = preNode
  }
}

function display(linkedlist) {
  // console.log(JSON.stringify(linkedlist, null, 4))
  let currNode = linkedlist.head
  let str = `${currNode.value}`
  currNode = currNode.next
  while (currNode !== null) {
    str += `, ${currNode.value}`
    currNode = currNode.next
  }
  console.log(str)
}

function reverseDLL(linkedList) {
  let currNode = linkedList.head
  let tempNode = null
  while (currNode !== null) {
    tempNode = currNode.next
    currNode.next = currNode.previous
    currNode.previous = tempNode
    currNode = tempNode
  }

  tempNode = linkedList.head
  linkedList.head = linkedList.tail
  linkedList.tail = tempNode
  // linkedList.head = currNode
}

function mainDll() {
  const dll = new DoubleLinkedList()
  dll.insertFirst('Appolo')
  dll.insertAfter('Zuse')
  dll.insertLast('Apple')
  dll.insertBefore('Key', 'Apple')
  dll.insertAfter('Cat', 'Appolo')
  // dll.insertAt('Inf', 0)
  // dll.remove('Inf')
  // console.log(dll.find('Cat'))
  reverseDLL(dll)
  display(dll)
  // console.log(dll)
}

mainDll()
