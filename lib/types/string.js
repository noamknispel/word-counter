const Type = require('./type_abstraction')

module.exports = class String extends Type {
  getContent() {
    return this.input
  }
}
