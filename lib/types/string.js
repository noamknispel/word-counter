const Type = require('./type')

module.exports = class String extends Type {
  getWords() {
    return this.input
  }
}
