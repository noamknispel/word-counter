const sourcesManager = require('./../../lib/sources_manager')
const StringType = require('./../../lib/types/string')
const FileType = require('./../../lib/types/file')
const UrlType = require('./../../lib/types/url')

describe('SourcesManager', function() {
  describe('getDataObject', function() {
    it('return string type', function() {
      const dataObject = sourcesManager.getDataObject({ text: 'supercalifragilisticexpialidocious' })
      expect(dataObject).to.be.instanceOf(StringType)
    })

    it('return file type', function() {
      const dataObject = sourcesManager.getDataObject({ filePath: '/somewhere/over/the/rainbow' })
      expect(dataObject).to.be.instanceOf(FileType)
    })

    it('return url type', function() {
      const dataObject = sourcesManager.getDataObject({ text: 'http://thereisnoplacelikehome.com' })
      expect(dataObject).to.be.instanceOf(UrlType)
    })
  })
})
