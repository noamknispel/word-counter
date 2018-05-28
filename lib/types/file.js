const bluebird = require('bluebird')
const fs = bluebird.promisifyAll(require('fs'))
const Type = require('./type_abstraction')

module.exports = class File extends Type {
  async getContent(next) {
    // Assumption: I assumed the file is txt file with utf8 encoding
    const stream = fs.createReadStream(this.input, 'utf8')
    return new Promise((resolve, reject) => {
      stream.on('data', async (chunk) => next(chunk))
      // Note: resolve will call only after stream is finished. Can really easily change to
      // process first chunk -> return response to the client -> continue processing in background
      stream.on('end', () => resolve())
      stream.on('error', (err) => reject(err))
    })
  }
}
