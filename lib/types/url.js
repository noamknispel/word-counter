const Type = require('./type_abstraction')
const fetch = require('node-fetch')

module.exports = class Url extends Type {
  async getContent(next) {
    // assumption: fetch will throw an error if something went wrong. Error handling to be added...
    // assumption: I assumed url is http/https
    // assumption: The prvided url will return text
    let content = await fetch(this.input)
    const { body: stream } = content

    return new Promise((resolve, reject) => {
      stream.on('data', async (chunk) => next(chunk.toString('utf8')))
      // Note: resolve will call only after stream is finished. Can really easily change to
      // process first chunk -> return response to the client -> continue processing in background
      stream.on('end', () => resolve())
      stream.on('error', (err) => reject(err))
    })
  }

  // Future thinking: I'd consider adding caching for the urls (if needed) and more validations methods
}
