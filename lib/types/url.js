const Type = require('./type_abstraction')
const fetch = require('node-fetch')

module.exports = class File extends Type {
  async getContent() {
    // assumption: fetch will throw an error if something went wrong. Error handling to be added...
    // assumption: I assumed url is http/https
    // Other types of request (ftp for example) will be added as a different type (using the same abstraction)
    // assumption: the prvided url will return text
    let content = await fetch(this.input)
    return content.text()
  }

  // Future thinking: I'd consider adding caching for the urls (if needed) and more validations methods (like verify the size of the file, etc..)
}
