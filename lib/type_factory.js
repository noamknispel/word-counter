const StringType = require('./types/string')
const FileType = require('./types/file')
const UrlType = require('./types/url')

module.exports = {
  getDataObject({ text, url, filePath }) {
    if (text) return new StringType(text)
    if (url) return new UrlType(url)
    if (filePath) return new FileType(filePath)

    // if (s3Path) return new S3Type(s3Path) -->
    // Latge file support: I've invested long time thinking about large files.
    // I think right now my best idea is to add new type and use S3 to get the data in chunks.
    // S3Type will handle the chunks proccesing
  }
}
