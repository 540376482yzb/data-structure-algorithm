const BST = require('./bst')

function findMaxBST(bst) {
  let maxLvl = 0
  heightBST(bst, 0)

  function heightBST(bst, lvl) {
    if (bst.left && bst.right) {
      lvl++
      heightBST(bst.left, lvl)
      heightBST(bst.right, lvl)
      return
    }
    if (bst.left) {
      lvl++
      return heightBST(bst.left, lvl)
    }
    if (bst.right) {
      lvl++
      return heightBST(bst.right, lvl)
    }

    if (lvl > maxLvl) {
      maxLvl = lvl
    }
  }

  return maxLvl
}

function isNotBST(bst) {
  return diveBST(bst)

  function checkKey(bstLeft, bstRight) {
    if (bstLeft) {
      const leftKey = bstLeft.key
      const parentKey = bstLeft.parent.key
      return parentKey < leftKey ? false : true
    }
    if (bstRight) {
      const rightKey = bstRight.key
      const parentKey = bstRight.parent.key
      return parentKey > rightKey ? false : true
    }
  }
  function diveBST(bst) {
    if (bst.left && bst.right) {
      const valid = checkKey(bst.left, bst.right)
      if (valid) {
        diveBST(bst.left)
        diveBST(bst.right)
        return
      }
      return true
    }
    if (bst.left) {
      const valid = checkKey(bst.left, null)
      if (valid) {
        return diveBST(bst.left)
      }
      return true
    }
    if (bst.right) {
      const valid = checkKey(null, bst.right)
      if (valid) {
        return diveBST(bst.right)
      }
      return true
    }
  }
}

function thirdLargestNode(bst) {
  let maxKey = 0
  const medalists = []
  let count = 0
  while (count < 3) {
    diveTree(bst)
    medalists.push(maxKey)
    maxKey = 0
    count++
  }
  return medalists[2]

  function diveTree(bst) {
    if (bst.key > maxKey && !medalists.includes(bst.key)) maxKey = bst.key
    if (bst.left && bst.right) {
      diveTree(bst.left)
      diveTree(bst.right)
      return
    }
    if (bst.left) {
      return diveTree(bst.left)
    }
    if (bst.right) {
      return diveTree(bst.right)
    }
  }
}

function isBalanced(bst) {
  if (!bst.left) {
    //
    return !(bst.right && (bst.right.left || bst.right.right))
  }

  if (!bst.right) {
    return !(bst.left && (bst.left.left || bst.left.right))
  }

  return isBalanced(bst.left) && isBalanced(bst.right)
}

function main() {
  const bst = new BST()
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(6)
  bst.insert(9)
  bst.insert(2)
  bst.insert(5)
  bst.insert(7)
  // console.log(bst)
  // console.log(findMaxBST(bst))
  // console.log(isNotBST(bst))
  // console.log(thirdLargestNode(bst))
  // console.log(balanceTree(bst))
}
main()
