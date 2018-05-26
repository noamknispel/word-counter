const StringType = require('./types/string')
const FileType = require('./types/file')
const UrlType = require('./types/url')

module.exports = {
  getDataObject({ text, filePath }) {
    if (text) {
      if (text.startsWith('http')) return new UrlType(text) // Assumption
      return new StringType(text)
    }
    if (filePath) return new FileType(filePath)
  }
}
