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

function getSize(linkedList) {
  let theHead = linkedList.head
  if (!theHead) {
    return 0
  }
  let size = 1
  while (theHead.next !== null) {
    size++
    if (theHead.next === null) {
      return size
    }
    theHead = theHead.next
  }
  return size
}

function isEmpty(linkedList) {
  return !linkedList.head ? true : false
}

function findPrevNode(linkedList, value) {
  let currNode = linkedList.head
  let prevNode = linkedList.head
  // no prevNode on the head node
  if (currNode.value === value) {
    return null
  }
  while (currNode.value !== value) {
    if (currNode.next === null) {
      return null
    }
    prevNode = currNode
    currNode = currNode.next
  }
  return prevNode
}

function findLastNode(linkedlist) {
  let currNode = linkedlist.head
  //check empty node
  if (!currNode) {
    return null
  }
  while (currNode.next !== null) {
    currNode = currNode.next
  }
  return currNode
}

function reverseList(linkedList) {
  let currNode = linkedList.head
  let tempNode = null
  while(currNode !== null){
    // tempNode = currNode.next
    let saveNode = currNode.next
    currNode.next = tempNode
    tempNode = currNode
    currNode = saveNode
    // tempNode.next = currNode
  }
  linkedList.head = tempNode
  return linkedList
}

// O(n)
function thirdFromTheEnd(linkedList) {
  let last = findLastNode(linkedList)
  let count = 1
  while (count < 3) {
    last = findPrevNode(linkedList, last.value)
    count++
  }
  return last.value
}

function middleList(linkedList) {
  if (!linkedList.head) return null
  let nextNode = linkedList.head
  let lastNode = findLastNode(linkedList)
  while (nextNode.next !== null) {
    if (nextNode.value === lastNode.value) {
      return nextNode.value
    }
    if (nextNode.next.value === lastNode.value) {
      return `${nextNode.value} - ${lastNode.value}`
    }
    nextNode = nextNode.next
    lastNode = findPrevNode(linkedList, lastNode.value)
  }
}

function checkCycleList(linkedList) {
  let currNode = linkedList.head
  let headValue = currNode.value
  let history = {}
  while (true) {
    if (currNode.next === null) {
      return false
    }
    if (Object.keys(history).includes(currNode.value)) {
      return true
    }
    history[currNode.value] = currNode.value
    currNode = currNode.next
  }
}
function main() {
  const sll = new LinkedList()
  sll.insertFirst('Appolo')
  sll.insertLast('Boomer')
  sll.insertLast('Helo')
  sll.insertLast('Husky')
  sll.insertLast('Starbuck')
  sll.insertLast('Tauhida')
  sll.insertBefore('Athena', 'Boomer')
  sll.insertAfter('Hotdog', 'Helo')

  const cycleLL = new LinkedList()
  cycleLL.insertFirst('Appolo')
  cycleLL.insertLast('Boomer')
  cycleLL.insertLast('Helo')
  findLastNode(cycleLL).next = cycleLL.head
  console.log(checkCycleList(cycleLL))

  // console.log(findLastNode(cycleLL))
  // display(sll)
  // console.log(middleList(sll))
  // console.log(thirdFromTheEnd(sll))
  // display(reverseList(sll))
  // console.log(getSize(sll))
  // console.log(findPrevNode(sll, 'Athena'))
  // console.log(findLastNode(sll))
  // console.log(isEmpty(sll))
}

main()
