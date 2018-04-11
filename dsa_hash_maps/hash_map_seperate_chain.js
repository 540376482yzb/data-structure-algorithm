const LinkedList = require('./linkedList')

class HashMapSeperateChain {
  constructor(initCapacity = 8) {
    this.length = 0
    this._slots = []
    this.capacity = initCapacity
    this._deleted = 0
  }

  static _hashString(str) {
    let hash = 5381
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i)
      hash = hash & hash
    }
    return hash >>> 0
  }

  static _findObj(linkedList, key) {
    let currNode = linkedList.head
    let currKey = null
    let currVal = null
    while (currNode !== null) {
      currKey = currNode.value.key
      if (currKey === key) {
        currVal = currNode.value.value
        break
      }
      currNode = currNode.next
    }
    return currVal
  }

  get(key) {
    const index = this._findSlot(key)
    const keysLL = this._slots[index]
    if (!keysLL) {
      return null
    }
    return HashMapSeperateChain._findObj(keysLL, key)
  }

  set(key, value) {
    //check load ratio
    const loadRatio = (this.length + this.deleted + 1) / this.capacity
    if (loadRatio > HashMapSeperateChain.MAX_LOAD_RATIO) {
      this._resize(this.capacity * HashMapSeperateChain.SIZE_RATIO)
    }
    // find slot
    const index = this._findSlot(key)

    //empty value at this slot
    if (!this._slots[index]) {
      const ll = new LinkedList()
      ll.insertFirst({ key, value, deleted: false })
      this._slots[index] = ll
      //value exists at this slot
    } else {
      this._slots[index].insertFirst({ key, value, deleted: false })
    }
    //increment length
    this.length++
  }

  _findSlot(key) {
    //hash key
    const hash = HashMapSeperateChain._hashString(key)
    return hash % this.capacity
  }

  _resize(size) {
    const oldSlots = this._slots
    this.capacity = size

    for (const slot of oldSlots) {
      if (slot !== undefined) {
        this.set(slot.key, slot.value)
      }
    }
  }

  remove(key) {
    //find index
    const index = this._findSlot(key)
    const slot = this._slots[index]
    if (slot === undefined) {
      return null
    }
    slot.find(key).deleted = true
    this.length--
    this._deleted++
  }
}

module.exports = HashMapSeperateChain
