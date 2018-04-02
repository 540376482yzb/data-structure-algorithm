/*counting sheep
 input : 3
 output :
 3 - Another sheep jump over the fence
 2 - Another sheep jump over the fence
 1 - Another sheep jump over the fence
 */

function countSheep(sheep) {
  if (sheep === 0) {
    return
  }

  console.log(`${sheep} - Another sheep jump over the fence`)
  countSheep(sheep - 1)
}

/*
  Array double
  input: [1,2,3]
  output: [2,4,6]
*/

function arrDouble(arr) {
  const len = arr.length
  if (len === 0) return []
  return [arr[0] * 2, ...arrDouble(arr.slice(1))]
}

countSheep(3)

console.log(arrDouble([1, 2, 3]))

/*
  Reverse String
  input: str
  ouput: rts
*/
function reverseStr(str) {
  if (str.length === 0) return ''
  return reverseStr(str.slice(1)) + str[0]
}

console.log(reverseStr('str'))

/*
  nth Triangular Number
  input: 1 2 3
  output: 1 3 6
*/
function nthTriangle(level) {
  if (level === 1) return 1

  return level + nthTriangle(level - 1)
}

console.log(nthTriangle(2))
