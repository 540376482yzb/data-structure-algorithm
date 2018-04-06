const Stack = require('./stack')
class _Node {
  constructor(value) {
    this.value = value
    this.prev = null
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
  }

  enqueue(data) {
    const node = new _Node(data)
    //if first is empty
    if (!this.first) {
      this.first = node
    }
    if (this.last) {
      node.prev = this.last
      this.last.next = node
    }
    // if last is empty
    this.last = node
  }

  dequeue() {
    // empty queue
    if (!this.first) {
      return null
    }
    const node = this.first
    this.first = node.next

    if (node === this.last) {
      this.last = null
    }

    return node.value
  }
}

class QueueStack {
  constructor() {
    this.inStack = new Stack()
    this.outStack = new Stack()
  }
  enqueue(data) {
    this.inStack.push(data)
  }
  dequeue() {
    let tempData
    if (this.outStack.top === null) {
      while (this.inStack.top) {
        tempData = this.inStack.pop()
        this.outStack.push(tempData)
      }
    }
    return this.outStack.pop()
  }
}

function peek(queue) {
  if (!queue.first) return null
  return queue.first.value
}

function display(queue) {
  let currNode = queue.first
  let str = currNode.value
  while (currNode !== queue.last) {
    // console.log(currNode.value)
    currNode = currNode.next
    if (currNode === null) {
      return null
    }
    str += ', ' + currNode.value
  }
  console.log(str)
}

function Qmain() {
  const starTrekQ = new Queue()
  starTrekQ.enqueue('Kirk')
  starTrekQ.enqueue('Spock')
  starTrekQ.enqueue('Uhura')
  starTrekQ.enqueue('Sulu')
  starTrekQ.enqueue('Checkov')
  starTrekQ.dequeue()
  starTrekQ.dequeue()
  display(starTrekQ)
}
// Qmain()

function QSmain() {
  const starTrekQS = new QueueStack()
  starTrekQS.enqueue('Kirk')
  starTrekQS.enqueue('Spock')
  starTrekQS.enqueue('Uhura')
  starTrekQS.enqueue('Sulu')
  starTrekQS.enqueue('Checkov')
  console.log(starTrekQS.dequeue())
  console.log(starTrekQS.dequeue())
  console.log(starTrekQS.dequeue())
  console.log(starTrekQS.dequeue())
  console.log(starTrekQS.dequeue())
}
// QSmain()

class DancePool {
  constructor() {
    this.maleWait = new Queue()
    this.femaleWait = new Queue()
    this.dancePool = new Queue()
  }
  enter(person) {
    if (person.gender === 'M') {
      this.maleWait.enqueue(person)
    } else {
      this.femaleWait.enqueue(person)
    }
    if (peek(this.maleWait) && peek(this.femaleWait)) {
      this.dancePool.enqueue([this.maleWait.dequeue(), this.femaleWait.dequeue()])
    }
  }
  announce() {
    let currNode = this.dancePool.first
    // console.log(currNode)
    while (currNode !== null) {
      console.log(`Female dancer is ${currNode.value[1].name} and Male dancer is ${currNode.value[0].name}`)
      currNode = currNode.next
    }

    currNode = this.maleWait.first
    if (currNode) {
      let countMale = 0
      while (currNode !== null) {
        countMale++
        currNode = currNode.next
      }
      console.log(`There are ${countMale} male dancers waiting to dance`)
    }

    currNode = this.femaleWait.first
    if (currNode) {
      let countFemale = 0
      while (currNode !== null) {
        countFemale++
        currNode = currNode.next
      }
      console.log(`There are ${countFemale} male dancers waiting to dance`)
    }
  }
}
function dancePairing() {
  const dancePool = new DancePool()
  dancePool.enter({ gender: 'F', name: 'Jane' })
  dancePool.enter({ gender: 'M', name: 'Frank' })
  dancePool.enter({ gender: 'M', name: 'John' })
  dancePool.enter({ gender: 'M', name: 'Sherlock' })
  dancePool.enter({ gender: 'F', name: 'Madonna' })
  dancePool.enter({ gender: 'M', name: 'David' })
  dancePool.enter({ gender: 'M', name: 'Christopher' })
  dancePool.enter({ gender: 'F', name: 'Beyonce' })
  dancePool.announce()
}

// dancePairing()

class Bank {
  constructor() {
    this.queue = new Queue()
  }
  lineUp(name) {
    console.log(`${name} is queuing`)
    this.queue.enqueue(name)
  }
  checkPaperWork() {
    const chance = Math.floor(Math.random() * 4)
    if (chance === 0) {
      return false
    }
    return true
  }
  helping() {
    if (this.checkPaperWork()) {
      return console.log(`helping ${this.queue.dequeue()}`)
    }
    const temp = this.queue.dequeue()
    this.queue.enqueue(temp)
    console.log(`${temp} is requeuing`)
  }
}

function liningInBank() {
  const bank = new Bank()
  bank.lineUp('John')
  bank.lineUp('Merlock')
  bank.lineUp('Merlock2')
  bank.lineUp('Merlock3')
  bank.lineUp('Merlock4')
  bank.lineUp('Merlock5')
  bank.lineUp('Merlock6')
  bank.lineUp('Merlock7')
  bank.lineUp('Merlock8')
  bank.lineUp('Merlock9')
  bank.lineUp('Merlock10')
  bank.lineUp('Merlock11')
  while (bank.queue.first) {
    bank.helping()
  }
  // bank.helping()
}
liningInBank()
