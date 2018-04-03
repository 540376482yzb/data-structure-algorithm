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

/* 
  String Splitter
  input: str
  ouput: [s,t,r]
*/

const strSplit = str => {
  if (str.length === 0) return []
  return [str[0], ...strSplit(str.slice(1))]
}

console.log(strSplit('hello'))

/* 
  Binary Rep
  input: 1 2 3 4
  output: 1 10 11 101

  4 / 2 = 2 ... 0
  2 / 2 = 1 ... 0
  1 /2 = 0 ... 1
*/

const decToBinary = num => {
  const q = Math.floor(num / 2)
  const r = num % 2
  if (q === 0) return [r]
  return [...decToBinary(q), r].join('')
}

console.log(decToBinary(25))

/* 
  Factorial
  input: 5
  outut: 5*4*3*2*1
*/
const facto = num => {
  if (num === 1) return 1
  return num * facto(num - 1)
}
console.log(facto(5))

/* 
  Fibonacci
  input: 7
  output:  1 1 2 3 5 8 13
  
  fib(7) = fib(6) + fib(5)

*/

function fib(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  return fib(num - 1) + fib(num - 2)
}

console.log(fib(7))

/*
  Anagrams
*/
const strArr = []
function anagrams(str, prefix) {
  const end = str.length
  if (end === 0) return prefix
  for (let i = 0; i < end; i++) {
    let word =
			// '' + 'e' = e
			// 'e' + 'a' = 'ea'
			prefix +
			str.charAt(i) +
			// ast
			str.substring(0, i) +
			str.substring(i + 1, end)
    if (!strArr.includes(word)) {
      strArr.push(word)
    }
    //        permutation('ast', 'e')
    //        permutation('est', 'a')
    //        permutation('eat', 's')
    //        permutation('eas', 't')

    //   permutation ('st','ea')
    //   permutation ('st','es')
    //   permutation ('st','et')
    anagrams(str.substring(0, i) + str.substring(i + 1, end), prefix + str.charAt(i))
  }
}

anagrams('east', '')
console.log(strArr)

const peopleHierarchy = [
  { name: 'Zuckerberg', boss: null, indent: 0 },
  { name: 'Schroepfer', boss: 'Zuckerberg', indent: 1 },
  { name: 'Schrage', boss: 'Zuckerberg', indent: 1 },
  { name: 'Sandberg', boss: 'Zuckerberg', indent: 1 },
  { name: 'Bosworth', boss: 'Schroepfer', indent: 2 },
  { name: 'Zhao', boss: 'Schroepfer', indent: 2 },
  { name: 'VanDyck', boss: 'Schrage', indent: 2 },
  { name: 'Swain', boss: 'Schrage', indent: 2 },
  { name: 'Goler', boss: 'Sandberg', indent: 2 },
  { name: 'Hernandez', boss: 'Sandberg', indent: 2 },
  { name: 'Moissinac', boss: 'Sandberg', indent: 2 },
  { name: 'Kelley', boss: 'Sandberg', indent: 2 },
  { name: 'Steve', boss: 'Bosworth', indent: 3 },
  { name: 'Kyle', boss: 'Bosworth', indent: 3 },
  { name: 'Steve', boss: 'Bosworth', indent: 3 },
  { name: 'Richie', boss: 'Zhao', indent: 3 },
  { name: 'Sofia', boss: 'Zhao', indent: 3 },
  { name: 'Jen', boss: 'Zhao', indent: 3 },
  { name: 'Sabrina', boss: 'VanDyck', indent: 3 },
  { name: 'Michelle', boss: 'VanDyck', indent: 3 },
  { name: 'Josh', boss: 'VanDyck', indent: 3 },
  { name: 'Blanch', boss: 'Swain', indent: 3 },
  { name: 'Tom', boss: 'Swain', indent: 3 },
  { name: 'Joe', boss: 'Swain', indent: 3 },
  { name: 'Eddie', boss: 'Goler', indent: 3 },
  { name: 'Julie', boss: 'Goler', indent: 3 },
  { name: 'Annie', boss: 'Goler', indent: 3 },
  { name: 'Rowi', boss: 'Hernandez', indent: 3 },
  { name: 'Inga', boss: 'Hernandez', indent: 3 },
  { name: 'Morgan', boss: 'Hernandez', indent: 3 },
  { name: 'Amy', boss: 'Moissinac', indent: 3 },
  { name: 'Chuck', boss: 'Moissinac', indent: 3 },
  { name: 'Vinni', boss: 'Moissinac', indent: 3 },
  { name: 'Eric', boss: 'Kelley', indent: 3 },
  { name: 'Ana', boss: 'Kelley', indent: 3 },
  { name: 'Wes', boss: 'Kelley', indent: 3 }
]

function getOrganize(peopleHierarchy, boss) {
  peopleHierarchy.filter(people => people.boss === boss).forEach(people => {
    indent(people.name, people.indent)
    getOrganize(peopleHierarchy, people.name)
  })
}

function indent(name, lvl) {
  console.log(`${'\t'.repeat(lvl)} ${name}`)
}

getOrganize(peopleHierarchy, null)
