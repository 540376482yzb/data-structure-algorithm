const BST = require('./bst')

const database = '25 15 50 10 24 35 70 4 12 18 31 44 66 90 22'.split(' ').map(num => Number(num))

const bst = new BST()
database.forEach(num => {
  bst.insert(num)
})

// Find a book

//linear search
/*
  1.loop through array
  2. on each iteration compares DDI with key
  3. return book if matched otherwise keep iterating
*/

//Binary search
/*
  1. loop through array and sort library via DDI
  2. find book at middle possition, compares it with key
  3. search recursively to left portion if middle DDI > key
  4. search recursively to right portion if middle DDI < key
*/

//Tree Traversal

//pre order traversal
console.log(preOrderSearch(bst))

// In order traversal
console.log(inOrderSearch(bst))

//post order traversal
console.log(postOrderSearch(bst))

//pre order search function
function preOrderSearch(bst, newArr = []) {
  newArr.push(bst.key)
  if (bst.left) {
    preOrderSearch(bst.left, newArr)
  }
  if (bst.right) {
    preOrderSearch(bst.right, newArr)
  }
  return newArr
}

//in order search function
function inOrderSearch(bst, newArr = []) {
  if (bst.left) {
    inOrderSearch(bst.left, newArr)
  }
  newArr.push(bst.key)
  if (bst.right) {
    inOrderSearch(bst.right, newArr)
  }
  return newArr
}

//post order search function
function postOrderSearch(bst, newArr = []) {
  if (bst.left) {
    postOrderSearch(bst.left, newArr)
  }
  if (bst.right) {
    postOrderSearch(bst.right, newArr)
  }
  newArr.push(bst.key)
  return newArr
}
