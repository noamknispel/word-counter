const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))
const Type = require('./type_abstraction')

module.exports = class File extends Type {
  async getContent() {
    const content = await fs.readFileAsync(this.input, 'utf8')
    return content
  }
}
