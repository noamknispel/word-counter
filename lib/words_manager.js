const sourcesManager = require('./sources_manager')
const Store = require('./store')
const _ = require('lodash')

module.exports = class {
  constructor(input) {
    this.input = input
    this.store = new Store()
  }

  async insert() {
    const type = sourcesManager.getType(this.input)
    const toInsert = this.getArrayOfWords(this.input)
    await this.store.insert(toInsert)
  }

  getArrayOfWords() {
    // I use lodash.words to get the string empty of any punctuation and extra spaces
    return _.words(_.lowerCase(this.input))
  }

  getCount() {
    return this.store.getCount(this.input)
  }
}
