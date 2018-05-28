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
    await data.getContent(this.processData.bind(this))
    // getContent() may throw error - error handling mechanism to be added here...
  }

  async processData(text) {
    const toInsert = this.getArrayOfWords(text)
    await this.store.insert(toInsert)
  }

  getArrayOfWords(text) {
    // lodash.words return array with words empty of any punctuation and extra spaces
    return _.words(_.lowerCase(text))
  }

  async getCount() {
    return this.store.getCount(this.input)
  }
}
