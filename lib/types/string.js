const Type = require('./type_abstraction')

module.exports = class String extends Type {
  async getContent(next) {
    // This short class was planned with thinking about future feature (some manipulation on the text for example, detec languges...)
    await next(this.input)
  }
}
