const Type = require('./type_abstraction')
const fetch = require('node-fetch')

module.exports = class File extends Type {
  // caching...
  // Check size
  async getContent() {
    // assumption - it works, fetch will trow an error if needed
    let content = await fetch(this.input)
    return content.text()
  }
}
