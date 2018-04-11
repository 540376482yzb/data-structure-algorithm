//LL contain integers is sorted low to high
// 1 3 4 5 7  input is 6

// 1 3 4 5 - 6 - 7

//  3 4 5  input 1

// 1 - 3 4 5

// const ll = new LinkedList()
// let currNode = ll.head
// let tempNode = currNode

// if(input < ll.head.value){
//   return ll.head = new Node(input,ll.head)
// }

// // let input = 6
// while(currNode.value < input){
//   tempNode = currNode
//   currNode = currNode.next
//   if(!currNode) return null
// }
// tempNode.next = new Node(input, currNode)
// return ll
