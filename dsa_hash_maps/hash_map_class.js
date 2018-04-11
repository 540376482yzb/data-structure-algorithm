class HashMap {
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

  get(key) {
    const index = this._findSlot(key)
    if (this._slots[index] === undefined) {
      return null
    }
    return this._slots[index].value
  }
  set(key, value) {
    //check load ratio
    const loadRatio = (this.length + this.deleted + 1) / this.capacity
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this.capacity * HashMap.SIZE_RATIO)
    }
    // find slot
    const index = this._findSlot(key)
    this._slots[index] = {
      key,
      value,
      deleted: false
    }
    //increment length
    this.length++
  }

  _findSlot(key) {
    //hash key
    const hash = HashMap._hashString(key)
    const start = hash % this.capacity
    for (let i = start; i < start + this.capacity; i++) {
      const index = i % this.capacity
      const slot = this._slots[index]
      if (slot === undefined || slot.key === key) {
        return index
      }
    }
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

  remvoe(key) {
    //find index
    const index = this._findSlot(key)
    const slot = this._slots[index]
    if (slot === undefined) {
      throw new Error('key error')
    }
    slot.deleted = true
    this.length--
    this._deleted++
    //set deleted : true
  }
}

module.exports = HashMap
