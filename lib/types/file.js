const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))
const Type = require('./type_abstraction')

module.exports = class File extends Type {
  async getContent() {
    // Large file support: to provide large file support I'd use the url type due
    // the limits of file size in http and the disk space in the server

    // Assumption: I assumed the file is txt file with utf8 encoding
    // Assumption: The fs.readFileAsync will throw an error if something went wrong,
    // anyway need to add error handling mechanisem across all the code
    const content = await fs.readFileAsync(this.input, 'utf8')
    return content
  }
}
