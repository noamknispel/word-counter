const sourcesManager = require('./sources_manager')
const Store = require('./store')
const _ = require('lodash')

module.exports = class {
  constructor(input) {
    this.input = input
    this.store = new Store()
  }

  async insert() {
    const data = sourcesManager.getDataObject(this.input)
    const toInsert = this.getArrayOfWords(data.getWords())
    await this.store.insert(toInsert)
  }

  getArrayOfWords(text) {
    // I use lodash.words to get the string empty of any punctuation and extra spaces
    return _.words(_.lowerCase(text))
  }

  getCount() {
    return this.store.getCount(this.input)
  }
}
