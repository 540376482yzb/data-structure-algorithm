// const HashMap = require('./hash_map_class')
const HashMap = require('./hash_map_seperate_chain')

//palindrome not a hash solution
function checkPalindrome(str) {
  let numPairs = _findPairs(str)
  if (numPairs === Math.floor(str.length / 2)) {
    return true
  }
  return false

  function _findPairs(str) {
    if (str.length <= 1) return 0
    const char = str[0]
    const rest = str.slice(1)
    const pairIndex = rest.indexOf(char)
    if (pairIndex !== -1) {
      str = rest.slice(0, pairIndex) + rest.slice(pairIndex + 1)
      return 1 + _findPairs(str)
    } else {
      return 0 + _findPairs(rest)
    }
  }
}

function groupAnagrams(groups) {
  const hashMap = new HashMap()
  const keys = []
  groups.forEach(item => {
    const value = item
    const key = item
      .split('')
      .sort()
      .join('')
    if (!hashMap.get(key)) {
      hashMap.set(key, [value])
    } else {
      hashMap.set(key, [...hashMap.get(key), value])
    }
    if (!keys.includes(key)) {
      keys.push(key)
    }
  })
  return keys.map(key => hashMap.get(key))
}

//hash solution by z
function hashPalinDrome(str) {
  const hashMap = new HashMap()
  let numParis = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (!hashMap.get(char)) {
      hashMap.set(char, 1)
      continue
    }
    numParis++
  }
  return numParis === Math.floor(str.length / 2) ? true : false
}
function main() {
  HashMap.MAX_LOAD_RATIO = 0.9
  HashMap.SIZE_RATIO = 3
  const lor = new HashMap()
  console.log(lor)
  lor.set('Hobbit', 'Bilbo')
  lor.set('Hobbit', 'Frodo')
  lor.set('Wizard', 'Gandolf')
  lor.set('Human', 'Aragon')
  lor.set('Elf', 'Legolas')
  lor.set('Maiar', 'The Necromancer')
  lor.set('Maiar', 'Sauron')
  lor.set('RingBearer', 'Gollum')
  lor.set('LadyOfLight', 'Galadriel')
  lor.set('HalfElven', 'Arwen')
  lor.set('Ent', 'Treebeard')
  // console.log(lor.get('Maiar'))
}
main()

function palindrome() {
  console.log(hashPalinDrome('acecarr'))
}
// palindrome()

function excAnagram() {
  console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))
}
// excAnagram()
