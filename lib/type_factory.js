const StringType = require('./types/string')
const FileType = require('./types/file')
const UrlType = require('./types/url')

module.exports = {
  getDataObject({ text, url, filePath }) {
    if (text) return new StringType(text)
    if (url) return new UrlType(url)
    if (filePath) return new FileType(filePath)
  }
}
