const typeFactory = require('./../lib/type_factory')
const Store = require('./../lib/store')
const _ = require('lodash')

module.exports = class WordsModel {
  constructor(input) {
    this.input = input
    this.store = new Store()
  }

  async insert() {
    const data = typeFactory.getDataObject(this.input)
    const toInsert = this.getArrayOfWords(await data.getContent())
    await this.store.insert(toInsert)
  }

  getArrayOfWords(text) {
    // I use lodash.words to get the string empty of any punctuation and extra spaces
    return _.words(_.lowerCase(text))
  }

  async getCount() {
    return this.store.getCount(this.input)
  }
}
