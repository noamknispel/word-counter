const Type = require('./type_abstraction')

module.exports = class String extends Type {
  getContent() {
    // This sort class was planned with thinking about future feature (some manipulation on the text for example, detec languges...)
    return this.input
  }
}
