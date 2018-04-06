class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next)
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  push(value) {
    //empty Stack
    let node = null
    if (!this.top) {
      node = new _Node(value, null)
      return (this.top = node)
    }
    node = new _Node(value, this.top)
    this.top = node
  }

  pop() {
    //empty Stack
    if (!this.top) {
      // console.log('empty stack')
      return null
    }
    const tempNode = this.top
    this.top = tempNode.next
    return tempNode.value
  }
}
module.exports = Stack

function peek(stack) {
  if (!stack.top) {
    return null
  }
  return stack.top.value
}
function display(stack) {
  let currNode = stack.top
  let str = ''
  while (currNode !== null) {
    str += currNode.value
    currNode = currNode.next
  }
  console.log(str)
}

function isPalindromes(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
  const stack = new Stack()
  const stackOut = new Stack()
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i])
    stackOut.push(str[str.length - 1 - i])
  }

  let a, b
  while (peek(stack)) {
    a = stack.pop()
    b = stackOut.pop()
    if (a !== b) {
      return false
    }
  }
  return true
}

/*
  Extension exercise: Recognize three pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

Extension extension exercise: Also recognize two types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.
  */
function matchParentheses(str) {
  const stack = new Stack()
  const end = str.length
  for (let i = 0; i < end; i++) {
    // case when stack is empty
    if (!peek(stack)) {
      // push '(' to stack
      if (str[i] === '(') {
        stack.push(i)
      }
      // report error if first push is ')'
      if (str[i] === ')') {
        return console.log('extra closing parenthesis at ', i)
      }
    }
    // continue to push '(' on top of existing
    if (str[i] === '(') {
      stack.push(i)
    }
    if (str[i] === ')') {
      stack.pop()
    }
  }
  if (peek(stack)) {
    console.log('extra open parenthesis at ', stack.pop())
  }
}

function sortStack(mStack) {
  function recursivePop(s) {
    if (!peek(s)) {
      return
    }
    s.pop()
    recursivePop(s)
  }
  const newStack = new Stack()
  let currTop = mStack.pop()
  while (peek(mStack)) {
    if (!newStack || currTop < peek(newStack)) {
      newStack.push(currTop)
    } else {
      recursivePop(newStack)
      newStack.push(currTop)
    }
    currTop = mStack.pop()
  }
  newStack.push(currTop)
  return newStack
}

function main() {
  // const starTrek = new Stack()
  // starTrek.push('Kirk')
  // starTrek.push('Spock')
  // starTrek.push('McCoy')
  // starTrek.push('Scotty')

  // console.log(peek(starTrek))
  // console.log(starTrek.pop())
  // console.log(starTrek.pop())
  // console.log(isPalindromes('dad'))

  // matchParentheses('((1+1)))')

  let stack = new Stack()
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  display(sortStack(stack))
}

// main()
